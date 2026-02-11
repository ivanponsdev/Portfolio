/* Particle Canvas */

import { useRef, useEffect, useCallback } from 'react';
import './ParticleCanvas.css';

/* ---- Configuración de partículas ---- */

/** Cantidad de partículas en desktop */
const PARTICLE_COUNT_DESKTOP = 60;

/** Cantidad de partículas en móvil (menos para rendimiento) */
const PARTICLE_COUNT_MOBILE = 30;

/** Radio de influencia del cursor en píxeles */
const CURSOR_RADIUS = 250;

/** Fuerza de atracción hacia el cursor (0-1) */
const CURSOR_FORCE = 0.08;

/** Colores de las partículas — Solo 2 colores principales */
const PARTICLE_COLORS: string[] = [
  'rgba(59, 130, 246, 0.7)',   // azul
  'rgba(139, 92, 246, 0.6)',   // púrpura
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseSpeed: number;
}

function createParticle(width: number, height: number): Particle {
  const baseSpeed = 0.15 + Math.random() * 0.35;
  const angle = Math.random() * Math.PI * 2;

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * baseSpeed,
    vy: Math.sin(angle) * baseSpeed,
    radius: 1.5 + Math.random() * 2.5,
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    baseSpeed,
  };
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  /* ---------- Inicializar partículas ---------- */
  const initParticles = useCallback((width: number, height: number) => {
    const isMobile = width < 768;
    const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(width, height)
    );
  }, []);

  /* ---------- Bucle de animación ---------- */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    for (const p of particlesRef.current) {
      /* -- Atracción hacia el cursor -- */
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < CURSOR_RADIUS && dist > 0) {
        /* Fuerza más fuerte cuanto más cerca del cursor */
        const influence = 1 - dist / CURSOR_RADIUS;
        const force = influence * influence * CURSOR_FORCE; // Cuadrática para más potencia
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      /* -- Fricción progresiva para mantener control -- */
      p.vx *= 0.97;
      p.vy *= 0.97;

      /* -- Velocidad mínima (siempre flotan) -- */
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed < p.baseSpeed * 0.5) {
        const angle = Math.atan2(p.vy, p.vx);
        p.vx = Math.cos(angle) * p.baseSpeed * 0.5;
        p.vy = Math.sin(angle) * p.baseSpeed * 0.5;
      }

      /* -- Mover -- */
      p.x += p.vx;
      p.y += p.vy;

      /* -- Rebote en bordes (wrap) -- */
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      /* -- Dibujar partícula -- */
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  /* ---------- Setup y limpieza ---------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = (): void => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        initParticles(canvas.width, canvas.height);
      }
    };

    const handleMouseMove = (e: MouseEvent): void => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = (): void => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    /* Soporte táctil */
    const handleTouchMove = (e: TouchEvent): void => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = (): void => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [animate, initParticles]);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleCanvas;

