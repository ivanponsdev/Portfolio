import React from 'react';
import { TargetIcon, LightbulbIcon, RocketIcon } from '../icons/Icons';
import './UGOverview.css';

const OVERVIEW_CARDS = [
  {
    step: 'I',
    icon: <TargetIcon size={32} />,
    title: 'EL PROBLEMA',
    text: 'Usuarios con poco tiempo y que necesitan gestionar sus inscripciones y accerder a cierta información de manera rápida e intuitiva, además de necesitar motivación y sensación de acompañamiento.',
    color: '#d4829a' 
  },
  {
    step: 'II',
    icon: <LightbulbIcon size={32} />,
    title: 'LA SOLUCIÓN',
    text: 'Ultimate GYM centraliza toda la gestión en una plataforma web SPA: usuarios, clases, ejercicios, estadísticas y automatizaciones desde una interfaz moderna, además tiene elementos que generan esa sensación de acompañamiento y motivación constante al usuario.',
    color: '#dfa85e' 
  },
  {
    step: 'III',
    icon: <RocketIcon size={32} />,
    title: 'EL RESULTADO',
    text: 'Una aplicación full-stack funcional con dashboards analíticos, automatizaciones n8n que eliminan tareas manuales y accesibilidad WCAG 2.1 AA.',
    color: '#7aa0c8' 
  },
];

const UGOverview: React.FC = () => {
  return (
    <section id="ug-overview" className="ug-overview">
      <div className="ug-overview__container">
        <header className="ug-overview__header">
          <h2 className="ug-overview__title">
            Misión
          </h2>
          <p className="ug-overview__subtitle">Transformación digital del negocio</p>
        </header>

        <div className="ug-overview__grid">
          {OVERVIEW_CARDS.map((card, idx) => (
            <article 
              key={card.title} 
              className={`ug-overview__card ug-overview__card--${idx}`}
              style={{ '--accent-color': card.color } as React.CSSProperties}
            >
              <div className="ug-overview__card-inner">
                <span className="ug-overview__step">{card.step}</span>
                <div className="ug-overview__icon" style={{ color: card.color }}>
                   {card.icon}
                </div>
                <h3 className="ug-overview__card-title">{card.title}</h3>
                <p className="ug-overview__card-text">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGOverview;