import { useState, useEffect } from 'react';
import './ScrollDownArrow.css';

const HOME_SECTIONS = ['landing', 'home', 'about', 'whatido', 'techstack', 'projects'];

interface Props {
  sectionIds?: string[];
}

const ScrollDownArrow: React.FC<Props> = ({ sectionIds = HOME_SECTIONS }) => {
  const [nextId, setNextId] = useState<string | null>(sectionIds[1] ?? null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollMid = window.scrollY + window.innerHeight / 2;
      let currentIndex = 0;

      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollMid >= top) currentIndex = i;
        }
      });

      setNextId(
        currentIndex < sectionIds.length - 1 ? sectionIds[currentIndex + 1] : null
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  if (!nextId) return null;

  const handleClick = () => {
    document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-arrow">
      <button
        type="button"
        className="scroll-arrow__btn"
        onClick={handleClick}
        aria-label="Ir a la siguiente sección"
      >
        <span className="scroll-arrow__icon" />
      </button>
    </div>
  );
};

export default ScrollDownArrow;
