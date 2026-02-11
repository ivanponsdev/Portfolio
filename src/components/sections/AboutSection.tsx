/* About Section - Profile info, bio, social links, and technologies */

import type { Technology, SocialLink } from '../../types';
import './AboutSection.css';


const PROFILE_IMAGE = '/images/_FRF3085.jpg';


const BIO_PARAGRAPHS: string[] = [
  'Soy un desarrollador web full stack con experiencia en la creación de aplicaciones web modernas y escalables. Me apasiona aprender nuevas tecnologías y aplicar mis conocimientos para resolver problemas reales a través del código.',
  'Además tengo un gran interés por el diseño de interfaces y la experiencia de usuario, buscando siempre que mis proyectos no solo sean funcionales sino también atractivos y fáciles de usar.',
];


const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/iv%C3%A1n-pons-mart%C3%ADnez-617609183/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:ivanponsdeonil@hotmail.es',
    icon: 'email',
  },
];


const TECHNOLOGIES: Technology[] = [
  { name: 'HTML5',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'Canva',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
  { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
  { name: 'SQL',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Figma',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'n8n',          icon: '/images/n8n-color.svg' },
  { name: 'GitHub',       icon: 'github-icon' },
];


const SocialIcon: React.FC<{ type: SocialLink['icon'] }> = ({ type }) => {
  switch (type) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    default:
      return null;
  }
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        {/* ---- Título de sección ---- */}
        <h2 className="about__section-title">
          Sobre <span className="gradient-text">Mí</span>
        </h2>

        {/* ---- Contenido principal ---- */}
        <div className="about__main">
          {/* Foto de perfil */}
          <div className="about__photo-wrapper">
            <div className="about__photo-glow" />
            <img
              src={PROFILE_IMAGE}
              alt="Foto de perfil"
              className="about__photo"
              loading="lazy"
            />
          </div>

          {/* Bio + Social */}
          <div className="about__info">
            {BIO_PARAGRAPHS.map((paragraph, i) => (
              <p key={i} className="about__bio">
                {paragraph}
              </p>
            ))}

            {/* Redes sociales */}
            <div className="about__socials">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Tecnologías ---- */}
        <div className="about__tech">
          <h3 className="about__tech-title">
            Tecnologías que <span className="gradient-text">utilizo</span>
          </h3>

          <div className="about__tech-grid">
            {TECHNOLOGIES.map((tech) => (
              <div key={tech.name} className="about__tech-card">
                {tech.icon === 'github-icon' ? (
                  <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ) : typeof tech.icon === 'string' && (tech.icon.startsWith('/') || tech.icon.startsWith('http')) ? (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="about__tech-icon-img"
                    loading="lazy"
                  />
                ) : (
                  <span className="about__tech-icon">{tech.icon}</span>
                )}
                <span className="about__tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
