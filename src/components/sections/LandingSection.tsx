/* Landing Section - Main landing page with particle animation */

import ParticleCanvas from '../ParticleCanvas';
import './LandingSection.css';


const TITLE_LINE_1 = 'Bienvenido a';
const TITLE_LINE_2 = 'mi Portfolio';
const SUBTITLE = 'Desarrollador Web Full Stack';
const CTA_TEXT = 'Comenzar visita';

const LandingSection: React.FC = () => {
  const handleCTA = (): void => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="landing" className="landing">
      {/* Fondo de partículas solo en esta sección */}
      <ParticleCanvas />

      <div className="landing__content">
        {/* ---- Título principal ---- */}
        <h1 className="landing__title">
          {TITLE_LINE_1}
          <br />
          {TITLE_LINE_2}
        </h1>

        {/* ---- Subtítulo ---- */}
        <p className="landing__subtitle">{SUBTITLE}</p>

        {/* ---- Botón CTA ---- */}
        <button
          type="button"
          className="landing__cta"
          onClick={handleCTA}
          aria-label={CTA_TEXT}
        >
          {CTA_TEXT}
          {/* ✏️ OPCIONES DE FLECHA:
              Descomenta la que prefieras:
              ↓ (flecha hacia abajo simples)
              ⬇ (flecha hacia abajo sólida)
              → (flecha derecha)
              ➜ (flecha derecha con estilo) */}
          <span className="landing__cta-arrow">↓</span>
        </button>
      </div>
    </section>
  );
};

export default LandingSection;
