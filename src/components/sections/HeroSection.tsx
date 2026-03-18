import React from 'react';
import InteractiveMap from '../InteractiveMap';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__map-container">
        <InteractiveMap />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <h1 className="hero__title">
          Hola, soy <span className="hero__name">Iván Pons</span>
        </h1>
        <p className="hero__bio">
          Desarrollador Full Stack especializado en materializar productos digitales de principio a fin. 
          Desde la conceptualización y diseño de interfaces intuitivas hasta la arquitectura robusta del backend y la gestión inteligente de datos. 
          Construyo soluciones escalables cuidando cada fase del desarrollo.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;