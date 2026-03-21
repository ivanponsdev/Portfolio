import React, { useState } from 'react';
import './TechCompass.css';

interface Tech {
  name: string;
  icon: string;
  description: string;
}

const technologies: Tech[] = [
  { 
    name: 'HTML5', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Domino la creación de estructuras limpias y accesibles. Antes de React, perfeccioné el uso de HTML5 manipulado con JavaScript puro para crear interfaces dinámicas y sólidas.'
  },
  { 
    name: 'CSS3', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Utilizo CSS para crear interfaces atractivas y adaptables. Mantengo mis proyectos organizados separando los estilos para asegurar la escalabilidad y el mantenimiento.'
  },
  { 
    name: 'JavaScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Mi lenguaje principal. Lo utilizo tanto en frontend para interactividad avanzada como en backend con Node.js, gestionando asincronía y APIs de forma eficiente.'
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Mi herramienta principal. Construyo aplicaciones mediante componentes reutilizables, priorizando la organización y el manejo eficiente del estado.'
  },
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'Desarrollo servidores robustos implementando el patrón Modelo-Vista-Controlador para separar la lógica de negocio y gestionar datos de forma segura.'
  },
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Donde perfeccioné mis bases de programación. Sigo trabajando en proyectos de mayor complejidad con Python para procesamiento de datos y scripts.'
  },
  { 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Implemento tipado estático para prevenir errores y mejorar la legibilidad del código en proyectos de gran escala tanto en React como en Node.'
  },
  { 
    name: 'Figma', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    description: 'Creo wireframes e interfaces interactivas. Uso Figma para validar ideas rápidamente, apoyándome en su IA para agilizar el proceso creativo.'
  },
];

const TechCompass: React.FC = () => {
  const [selected, setSelected] = useState<Tech | null>(technologies[4]);
  const [mobileSelected, setMobileSelected] = useState<Tech>(technologies[4]);

  return (
    <>
    <div className="tech-compass-layout">
      <div className="compass-area">
        <div className="compass-container">
          <div className="compass-lines">
            <div className="line-v"></div>
            <div className="line-h"></div>
          </div>
          
          <div className="compass-core"></div>
          
          <span className="cardinal n">N</span>
          <span className="cardinal s">S</span>
          <span className="cardinal e">E</span>
          <span className="cardinal w">W</span>
          
          <div className="orbit-ring"></div>
          
          <div className="logo-orbit">
            {technologies.map((tech, index) => {
              const angle = (index * 360) / technologies.length;
              const radius = 150; 
              return (
                <div 
                  key={tech.name} 
                  className="logo-positioner" 
                  style={{ transform: `rotate(${angle}deg) translateX(${radius}px)` }}
                >
                  <div 
                    className={`logo-item ${selected?.name === tech.name ? 'active' : ''}`} 
                    onClick={() => setSelected(tech)}
                  >
                    <div className="logo-wrapper" style={{ transform: `rotate(-${angle}deg)` }}>
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`info-sidebar ${selected ? 'open' : ''}`}>
        <div className="sidebar-inner">
          {selected && (
            <div className="info-content">
              <img src={selected.icon} alt={selected.name} className="info-icon" />
              <h2 className="info-title">{selected.name}</h2>
              <p className="info-text">{selected.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* ─── Mobile Grid (hidden on desktop via CSS) ─── */}
    <div className="mobile-grid-wrapper">
      <div className="mobile-grid" role="list">
        {technologies.map((tech) => (
          <button
            key={tech.name}
            role="listitem"
            className={`mobile-grid-item${mobileSelected.name === tech.name ? ' active' : ''}`}
            onClick={() => setMobileSelected(tech)}
            aria-label={tech.name}
          >
            <img src={tech.icon} alt="" aria-hidden="true" />
            <span>{tech.name}</span>
          </button>
        ))}
      </div>

      <div className="mobile-grid-panel">
        <img src={mobileSelected.icon} alt={mobileSelected.name} />
        <div className="mobile-grid-panel-text">
          <h3>{mobileSelected.name}</h3>
          <p>{mobileSelected.description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TechCompass;