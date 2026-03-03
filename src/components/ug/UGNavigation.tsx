import { useState, useEffect } from 'react';
import './UGNavigation.css';

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Resumen Ejecutivo', id: 'ug-overview' },
  { label: 'Características Principales', id: 'ug-features' },
  { label: 'Recorrido de Usuario', id: 'ug-flows' },
  { label: 'Stack Tecnológico', id: 'ug-tech' },
  { label: 'Automatizaciones', id: 'ug-n8n' },
  { label: 'Resultados e Impacto', id: 'ug-results' },
  { label: '¿Te interesa el proyecto?', id: 'ug-cta' },
];

const UGNavigation: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('ug-overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      let activeItem = NAV_ITEMS[0].id;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            activeItem = item.id;
          }
        }
      }

      setActiveId(activeItem);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al montar
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
              aria-current={activeId === item.id ? 'page' : undefined}
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
