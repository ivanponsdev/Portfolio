import './UGHero.css';

const BADGES = ['React', 'Node.js', 'MongoDB', 'n8n'];

const UGHero: React.FC = () => {
  return (
    <section className="ug-hero">
      {/* Gradient overlay */}
      <div className="ug-hero__overlay" />

      <div className="ug-hero__content container">
        <div className="ug-hero__text">
          <h1 className="ug-hero__title">Ultimate GYM</h1>
          <p className="ug-hero__tagline">
            Plataforma SPA para la gestión integral de gimnasios&nbsp;—
            Automatización, Analytics e Interfaz Accesible
          </p>

          {/* Tech badges */}
          <div className="ug-hero__badges">
            {BADGES.map((badge) => (
              <span key={badge} className="ug-hero__badge">
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="ug-hero__ctas">
            <a
              href="#ug-features"
              className="ug-hero__cta ug-hero__cta--primary"
            >
              Explorar características
            </a>
            <a
              href="#ug-cta"
              className="ug-hero__cta ug-hero__cta--secondary"
            >
              Ver repositorio
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="ug-hero__visual">
          <div className="ug-hero__image-frame">
            <img
              src="/images/UG.jpg"
              alt="Ultimate GYM — Dashboard principal"
              className="ug-hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGHero;
