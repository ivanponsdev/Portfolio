/* Projects Section - Portfolio projects showcase */

import { useNavigate } from 'react-router-dom';
import { RocketIcon } from '../icons/Icons';
import type { Project } from '../../types';
import './ProjectsSection.css';


const PROJECTS: (Project & { route?: string })[] = [
  {
    id: 1,
    title: 'Ultimate GYM',
    description:
      'Sistema SPA de gestión de gimnasios con React + Node.js que integra autenticación segura, gestión de usuarios/clases/ejercicios, dashboards analíticos con visualización de datos, características de accesibilidad y chat de soporte.',
    image: '/images/UG.jpg',
    tags: ['React', 'Node.js', 'JavaScript', 'CSS', 'n8n'],
    link: 'https://gym-app-git-main-ivans-projects-cb621e21.vercel.app',
    repo: 'https://github.com/ivanponsdev/gym-app',
    route: '/projects/ultimate-gym',
  },

];

/** Texto que aparece si no hay más proyectos */
const COMING_SOON_TEXT = 'Próximamente nuevos proyectos...';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="projects section">
      <div className="container">
        {/* ---- Título de sección ---- */}
        <h2 className="projects__section-title">
          Mis <span className="projects__title-accent">Proyectos</span>
        </h2>

        {/* ---- Lista de proyectos ---- */}
        <div className="projects__list">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`projects__card ${project.route ? 'projects__card--clickable' : ''}`}
              onClick={() => project.route && navigate(project.route)}
              role={project.route ? 'link' : undefined}
              tabIndex={project.route ? 0 : undefined}
              onKeyDown={(e) => {
                if (project.route && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  navigate(project.route);
                }
              }}
            >
              {/* Imagen del proyecto */}
              <div className="projects__card-image-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__card-image"
                    loading="lazy"
                    style={{ cursor: project.route ? 'pointer' : undefined }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.route) navigate(project.route);
                    }}
                  />
                ) : (
                  /* Placeholder si no hay imagen */
                  <div
                    className="projects__card-placeholder"
                    style={{ cursor: project.route ? 'pointer' : undefined }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.route) navigate(project.route);
                    }}
                  >
                    <span className="projects__card-placeholder-icon">
                      <RocketIcon size={48} />
                    </span>
                    <span className="projects__card-placeholder-text">
                      Click para ver más
                    </span>
                  </div>
                )}
              </div>

              {/* Info del proyecto */}
              <div className="projects__card-info">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                {/* Tags de tecnología */}
                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ver detalles */}
                {project.route && (
                  <span className="projects__card-cta">
                    Ver proyecto completo →
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ---- Próximamente ---- */}
        <p className="projects__coming-soon">{COMING_SOON_TEXT}</p>
      </div>
    </section>
  );
};

export default ProjectsSection;
