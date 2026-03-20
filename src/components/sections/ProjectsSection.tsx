import { useNavigate } from 'react-router-dom';
import { RocketIcon } from '../icons/Icons';
import type { Project } from '../../types';
import './ProjectsSection.css';

const PROJECTS: (Project & { route?: string })[] = [
  {
    id: 1,
    title: 'ULTIMATE GYM',
    description:
      'Infraestructura integral para centros deportivos basada en MERN Stack. Implementación de una base de datos flexible con MongoDB para la gestión de rutinas dinámicas, lógica de servidor robusta en Node.js y una interfaz reactiva de alta fidelidad para el usuario final.',
    image: '/images/UG.jpg',
    tags: ['REACT', 'NODE.JS', 'MONGODB', 'JAVASCRIPT', 'N8N', 'CSS'],
    link: 'https://ultimate-gym-project.vercel.app',
    repo: 'https://github.com/ivanponsdev/UltimateGym-Project',
    route: '/projects/ultimate-gym',
  },
];

const COMING_SOON_TEXT = 'Siguientes coordenadas en desarrollo...';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="projects__section-title">
          Expedientes de <span className="projects__title-accent">Proyectos</span>
        </h2>

        <div className="projects__list">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`projects__card ${project.route ? 'projects__card--clickable' : ''}`}
              onClick={() => project.route && navigate(project.route)}
            >
              <div className="projects__card-image-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__card-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="projects__card-placeholder">
                    <span className="projects__card-placeholder-icon">
                      <RocketIcon size={48} />
                    </span>
                    <span className="projects__card-placeholder-text">
                      ACCEDIENDO AL SISTEMA...
                    </span>
                  </div>
                )}
              </div>

              <div className="projects__card-info">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.route && (
                  <span className="projects__card-cta">
                    Explorar proyecto →
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="projects__coming-soon">{COMING_SOON_TEXT}</p>
      </div>
    </section>
  );
};

export default ProjectsSection;