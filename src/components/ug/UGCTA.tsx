import { RocketIcon } from '../icons/Icons';
import './UGCTA.css';

const LINKS = [
  {
    label: 'Ver Demo en Vivo',
    href: 'https://gym-app-git-main-ivans-projects-cb621e21.vercel.app',
    icon: <RocketIcon size={18} />,
    primary: true,
  },
];

const UGCTA: React.FC = () => {
  return (
    <section id="ug-cta" className="ug-cta">
      <div className="container">
        <div className="ug-cta__card">
          {/* Decorative glow */}
          <div className="ug-cta__glow" />

          <h2 className="ug-cta__title">
            ¿Te interesa el proyecto?
          </h2>
          <p className="ug-cta__text">
            Explora la demo en vivo o contacta conmigo para saber más sobre el desarrollo de Ultimate&nbsp;GYM.
          </p>

          <div style={{ color: '#888', fontSize: '0.95rem', marginBottom: '1.2rem' }}>
            <strong>Cuenta demo disponible:</strong><br />
            Email: demo@portfolio.com<br />
            Password: Demo123!<br />
            O haz clic en "Entrar como Usuario Demo" en la app.
          </div>

          <div className="ug-cta__links">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`ug-cta__link ${
                  link.primary ? 'ug-cta__link--primary' : 'ug-cta__link--secondary'
                }`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to portfolio */}
          <p className="ug-cta__back-text">
            ← O vuelve a ver{' '}
            <a href="/" className="ug-cta__back-link">
              mis otros proyectos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UGCTA;
