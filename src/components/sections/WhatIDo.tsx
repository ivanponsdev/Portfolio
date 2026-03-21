import React from 'react';
import { Code2, Server, Database } from 'lucide-react';
import './AboutSection.css';
import './WhatIDo.css';

const EXPERTISE_AREAS = [
  {
    title: 'Frontend',
    icon: <Code2 size={40} strokeWidth={1.5} />,
    description: 'Desarrollo de interfaces modernas y responsivas con React, TypeScript y CSS avanzado. Experiencia en diseño UX/UI, animaciones fluidas y optimización de rendimiento.',
    skills: ['React', 'TypeScript', 'HTML5/CSS3', 'Responsive Design', 'UX/UI'],
  },
  {
    title: 'Backend',
    icon: <Server size={40} strokeWidth={1.5} />,
    description: 'Creación de APIs robustas y escalables con Node.js y arquitecturas RESTful. Implementación de autenticación JWT con gestión de roles, estructuras MVC y lógica de negocio compleja.',
    skills: ['Node.js', 'REST APIs', 'JWT Auth', 'MVC', 'Java', 'Python'],
  },
  {
    title: 'Base de Datos',
    icon: <Database size={40} strokeWidth={1.5} />,
    description: 'Diseño e implementación de bases de datos eficientes tanto SQL como NoSQL. Experiencia en modelado de datos, optimización de consultas y gestión de grandes volúmenes de información.',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Diseño de Schemas', 'Queries Optimization'],
  },
];

// Componente de línea blanca discontinua y curva
const ConnectionLine: React.FC<{ isReverse: boolean }> = ({ isReverse }) => (
  <div className={`map-connection ${isReverse ? 'reverse' : ''}`}>
    <svg 
      width="100%" 
      height="160" 
      viewBox="0 0 800 160" 
      preserveAspectRatio="none"
      style={{ overflow: 'visible' }}
    >
      <path
        d={isReverse 
          ? "M 700 0 C 700 140, 100 20, 100 160" 
          : "M 100 0 C 100 140, 700 20, 700 160"}
        fill="none"
        stroke="rgba(255, 255, 255, 0.4)" /* Blanco sutil */
        strokeWidth="2.5"
        strokeDasharray="10,12"
        className="path-animation"
      />
    </svg>
  </div>
);

const WhatIDo: React.FC = () => {
  return (
    <section id="whatido" className="about section section-full">
      <div className="container">
        <h2 className="about__section-title">
          Lo que <span className="gold-text">hago</span>
        </h2>

        <div className="expedition-map">
          {EXPERTISE_AREAS.map((area, index) => (
            <React.Fragment key={area.title}>
              <div className={`milestone ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="milestone__marker">
                  <div className="marker-compass"></div>
                  <div className="marker-glass"></div>
                  <div className="milestone__icon-vector">
                    {area.icon}
                  </div>
                  <span className="milestone__coord">0{index + 1}</span>
                </div>

                <div className="milestone__card">
                  <h4 className="milestone__title">{area.title}</h4>
                  <p className="milestone__desc">{area.description}</p>
                  <div className="milestone__tags">
                    {area.skills.map((skill) => (
                      <span key={skill} className="milestone__tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {index < EXPERTISE_AREAS.length - 1 && (
                <ConnectionLine isReverse={index % 2 === 0} />
              )}
            </React.Fragment>
          ))}

          {/* Destino Final: Solo aquí mantenemos la X Roja */}
          <div className="map-final-x">
            <div className="x-wrapper">
              <span className="x-letter">X</span>
            </div>
            <p className="x-label"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;