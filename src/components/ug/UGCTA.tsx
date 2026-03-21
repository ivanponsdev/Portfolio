import { RocketIcon } from '../icons/Icons';
import './UGCTA.css';

const UGCTA: React.FC = () => {
  return (
    <section id="ug-cta" className="ug-cta">
      <div className="ug-cta__container">
        <header className="ug-cta__header">
          <div className="ug-cta__badge">[ ACCESO AL PROYECTO ]</div>
          <h2 className="ug-cta__title">¿TE INTERESA EL PROYECTO?</h2>
          <p className="ug-cta__subtitle">
            Explora la demo en vivo o contacta conmigo para conocer más sobre el desarrollo de Ultimate GYM.
          </p>
        </header>

        <div className="ug-cta__body">
          <div className="ug-cta__credentials">
            <div className="ug-cta__cred-header">
              <span className="ug-cta__cred-label">CREDENCIALES DE PRUEBA</span>
              <span className="ug-cta__cred-dot" />
            </div>
            <div className="ug-cta__cred-grid">
              <div className="ug-cta__cred-block">
                <span className="ug-cta__cred-role">USUARIO DEMO</span>
                <div className="ug-cta__cred-field">
                  <span className="ug-cta__cred-key">email</span>
                  <span className="ug-cta__cred-val">demo@portfolio.com</span>
                </div>
                <div className="ug-cta__cred-field">
                  <span className="ug-cta__cred-key">pass</span>
                  <span className="ug-cta__cred-val">Demo123!</span>
                </div>
              </div>
              <div className="ug-cta__cred-divider" />
              <div className="ug-cta__cred-block">
                <span className="ug-cta__cred-role">ADMIN</span>
                <div className="ug-cta__cred-field">
                  <span className="ug-cta__cred-key">email</span>
                  <span className="ug-cta__cred-val">admin@portfolio.com</span>
                </div>
                <div className="ug-cta__cred-field">
                  <span className="ug-cta__cred-key">pass</span>
                  <span className="ug-cta__cred-val">Admin123!</span>
                </div>
              </div>
            </div>
            <p className="ug-cta__cred-note">
              » O haz clic en "Entrar como Usuario Demo" dentro de la app.
            </p>
          </div>

          <div className="ug-cta__actions">
            <a
              href="https://ultimate-gym-project.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ug-cta__btn ug-cta__btn--primary"
            >
              <RocketIcon size={16} />
              <span>VER DEMO EN VIVO</span>
            </a>
            <a
              href="https://github.com/ivanponsdev/UltimateGym-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="ug-cta__btn ug-cta__btn--secondary"
            >
              <span>ACCEDER AL REPOSITORIO</span>
            </a>
          </div>

        </div>

        <div className="ug-cta__back">
          <a href="/" className="ug-cta__back-link">← Volver a mis otros proyectos</a>
        </div>
      </div>
    </section>
  );
};

export default UGCTA;
