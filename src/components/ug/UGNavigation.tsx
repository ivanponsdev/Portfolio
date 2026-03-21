import { useState, useEffect } from 'react';
import './UGNavigation.css';

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Ultimate Team', id: 'ug-hero' }, // Apunta al ID de tu sección Hero
  { label: 'Resumen Ejecutivo', id: 'ug-overview' },
  { label: 'Características Principales', id: 'ug-features' },
  { label: 'Recorrido de Usuario', id: 'ug-flows' },
  { label: 'Stack Tecnológico', id: 'ug-tech' },
  { label: 'Automatizaciones', id: 'ug-n8n' },
  { label: 'Resultados e Impacto', id: 'ug-results' },
  { label: '¿Te interesa el proyecto?', id: 'ug-cta' },
];

const UGNavigation: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('ug-hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollMid = window.scrollY + window.innerHeight / 3;
      let activeItem = NAV_ITEMS[0].id;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (scrollMid >= sectionTop) {
            activeItem = item.id;
          }
        }
      }
      setActiveId(activeItem);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="ug-navigation">
      <ul className="ug-navigation__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="ug-navigation__item">
            <button
              className={`ug-navigation__link ${
                activeId === item.id ? 'ug-navigation__link--active' : ''
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default UGNavigation;