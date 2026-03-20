import { useRef, useEffect, useCallback } from 'react';
import './ParticleCanvas.css';

/* ---- Configuración de Constelaciones Estelares Náuticas ---- */

/** Cantidad de estrellas en desktop */
const PARTICLE_COUNT_DESKTOP = 100;

/** Cantidad de estrellas en móvil */
const PARTICLE_COUNT_MOBILE = 40;

/** Distancia máxima para conectar dos estrellas (px) */
const CONNECTION_DISTANCE = 150;

/** Radio de influencia del cursor (px) */
const CURSOR_RADIUS = 250;

/** Fuerza de atracción (0-1) */
const CURSOR_FORCE = 0.08;

/** * NUEVA PALETA: Colores de las estrellas y red náutica 
 * Tonos blancos, azules fríos y un toque de mar
 */
const PARTICLE_COLORS: string[] = [
  'rgba(255, 255, 255, 0.9)', // Blanco puro estelar
  'rgba(173, 216, 230, 0.7)', // Azul hielo muy claro
  'rgba(100, 149, 237, 0.5)', // Azul mar suave
];

/** Lista de tecnologías para etiquetas flotantes (mantenida) */
const TECH_LABELS = ['React', 'Node.js', 'TypeScript', 'SQL', 'API', 'Git', 'UI/UX', 'Cloud'];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseSpeed: number;
  label: string | null;
}

/** Crea una partícula con posibilidad de tener etiqueta (mantenida) */
function createParticle(width: number, height: number): Particle {
  const baseSpeed = 0.1 + Math.random() * 0.3;
  const angle = Math.random() * Math.PI * 2;
  
  const hasLabel = Math.random() > 0.85;
  const label = hasLabel ? TECH_LABELS[Math.floor(Math.random() * TECH_LABELS.length)] : null;

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * baseSpeed,
    vy: Math.sin(angle) * baseSpeed,
    radius: 1.0 + Math.random() * 2.0, // Estrellas más pequeñas y nítidas
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    baseSpeed,
    label,
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

  /* ---------- Bucle de animación y dibujo ---------- */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    // Primera pasada: Actualizar posiciones y dibujar la RED
    for (let i = 0; i < particlesRef.current.length; i++) {
      const p = particlesRef.current[i];

      /* -- Lógica de movimiento -- */
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const distMouse = Math.sqrt(dx * dx + dy * dy);

      if (distMouse < CURSOR_RADIUS && distMouse > 0) {
        const influence = 1 - distMouse / CURSOR_RADIUS;
        const force = influence * influence * CURSOR_FORCE;
        p.vx += (dx / distMouse) * force;
        p.vy += (dy / distMouse) * force;
      }

      p.vx *= 0.97;
      p.vy *= 0.97;

      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed < p.baseSpeed * 0.5) {
        const angle = Math.atan2(p.vy, p.vx);
        p.vx = Math.cos(angle) * p.baseSpeed * 0.5;
        p.vy = Math.sin(angle) * p.baseSpeed * 0.5;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Wrap-around
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      /* -- Dibujar las conexiones de la RED Náutica -- */
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p2 = particlesRef.current[j];
        const dx2 = p.x - p2.x;
        const dy2 = p.y - p2.y;
        const distConnect = Math.sqrt(dx2 * dx2 + dy2 * dy2);

       if (distConnect < CONNECTION_DISTANCE) {
          ctx.beginPath();
          
          // 1. Aumenta el multiplicador final (estaba en 0.1, súbelo a 0.3 o 0.4)
          const opacity = (1 - distConnect / CONNECTION_DISTANCE) * 0.35; 
          
          // 2. Puedes usar un blanco con un toque azulado para que brillen más
          ctx.strokeStyle = `rgba(180, 210, 255, ${opacity})`; 
          
          // 3. Aumenta el grosor (estaba en 0.5, prueba con 0.8 o 1.0)
          ctx.lineWidth = 0.8; 
          
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }

    // Segunda pasada: Dibujar las ESTRELLAS y ETIQUETAS
    for (const p of particlesRef.current) {
      /* -- Dibujar Estrella -- */
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0; 

      /* -- Dibujar Etiqueta de Tecnología -- */
      if (p.label) {
        ctx.font = '10px "Fira Code", monospace';
        // Usamos un blanco tenue para las etiquetas
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; 
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.label, p.x + 8, p.y + 2);
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  /* ---------- Setup y limpieza (mantenida) ---------- */
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