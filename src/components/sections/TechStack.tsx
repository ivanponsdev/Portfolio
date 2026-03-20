import React from 'react';
import TechCompass from './TechCompass';
import './TechCompass.css';

const TechStack: React.FC = () => {
  return (
    <section id="techstack" className="tech-stack-section">
      <div className="tech-stack-main-container">
        {/* Título integrado en el flujo controlado */}
        <h2 className="tech-stack-title">
          Stack <span className="gold-text">Tecnológico</span>
        </h2>
        <TechCompass />
      </div>
    </section>
  );
};

export default TechStack;