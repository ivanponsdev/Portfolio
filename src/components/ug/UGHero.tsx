import './UGHero.css';

const BADGES = ['REACT', 'NODE.JS', 'MONGODB', 'N8N'];

const UGHero: React.FC = () => {
  return (
    /* He añadido id="ug-hero" para que el Nav pueda hacer scroll aquí */
    <section className="ug-hero" id="ug-hero">
      
      {/* Fondo de Radar Naval Azul */}
      <div className="radar-background">
        <div className="radar-sweep"></div>
        <div className="radar-point" style={{ top: '20%', left: '30%' }}></div>
        <div className="radar-point" style={{ top: '65%', left: '85%', animationDelay: '1.5s' }}></div>
        <div className="radar-point" style={{ top: '40%', left: '15%', animationDelay: '2.5s' }}></div>
        <div className="radar-point" style={{ top: '80%', left: '40%', animationDelay: '0.5s' }}></div>
      </div>

      {/* Tu Gradient overlay original */}
      <div className="ug-hero__overlay" />

      <div className="ug-hero__content container">
        <div className="ug-hero__text">
          <h1 className="ug-hero__title">Ultimate GYM</h1>
          
          {/* Bloque técnico nuevo */}
          <div className="ug-hero__mission-specs">
            <span>{'>'} MISIÓN: GESTIÓN INTEGRAL DE GIMNASIOS</span>
            <span>{'>'} STATUS: OPERATIVO // MERN STACK</span>
          </div>

          <p className="ug-hero__tagline">
            Plataforma SPA para la gestión integral de gimnasios. <br />
            <br />
            - Autenticación con roles, JWT,Bcrypt.
            <br />
            - Automatización, Analytics e Interfaz Accesible.
          </p>

          <div className="ug-hero__badges">
            {BADGES.map((badge) => (
              <span key={badge} className="ug-hero__badge">
                {badge}
              </span>
            ))}
          </div>

          <div className="ug-hero__ctas">
            <a href="#ug-features" className="ug-hero__cta ug-hero__cta--primary">
              EXPLORAR CARACTERÍSTICAS
            </a>
            <a href="#ug-cta" className="ug-hero__cta ug-hero__cta--secondary">
              ACCEDER A LA DEMO
            </a>
          </div>
        </div>

        <div className="ug-hero__visual">
          <div className="ug-hero__monitor-frame">
            <div className="ug-hero__scanline"></div>
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