/* Navbar */

import { useState, useEffect, useCallback } from 'react';
import type { NavLink } from '../types';
import './Navbar.css';

/* ---- Links de navegación ----
   Edita aquí para añadir / quitar secciones */
const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: 'home' },
  { label: 'Sobre mí', href: 'about' },
  { label: 'Proyectos', href: 'projects' },
];

/** Nombre / logo del portfolio.
 *  ✏️ EDITAR: cambia el texto del logo aquí */
const LOGO_TEXT = 'Portfolio';

interface NavbarProps {
  /** Mostrar navbar solo después de pasar la landing */
  showAfterLanding?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showAfterLanding = true }) => {
  const [visible, setVisible] = useState(!showAfterLanding);
  const [menuOpen, setMenuOpen] = useState(false);

  /* -- Detectar scroll para mostrar/ocultar -- */
  const handleScroll = useCallback(() => {
    if (!showAfterLanding) return;
    const scrollY = window.scrollY;
    const landingHeight = window.innerHeight * 0.7;
    setVisible(scrollY > landingHeight);
  }, [showAfterLanding]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* -- Scroll suave a la sección -- */
  const scrollTo = (sectionId: string): void => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
      {/* Línea decorativa de gradiente en la parte inferior */}
      <div className="navbar__gradient-line" />

      <div className="navbar__inner container">
        {/* Logo */}
        <button
          type="button"
          className="navbar__logo"
          onClick={() => scrollTo('landing')}
          aria-label="Volver al inicio"
        >
          {LOGO_TEXT}
        </button>

        {/* Links — desktop */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                className="navbar__link"
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa — móvil */}
        <button
          type="button"
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                className="navbar__mobile-link"
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

