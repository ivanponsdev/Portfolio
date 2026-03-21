import { useState } from 'react';
import './UGGallery.css';

interface GalleryImage {
  src: string;
  title: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/images/Estadisticas.jpg', title: 'Estadísticas' },
  { src: '/images/MisClases.jpg', title: 'Mis Clases' },
  { src: '/images/Calendario.jpg', title: 'Calendario' },
  { src: '/images/AsistenteVirtual.jpg', title: 'Asistente Virtual' },
  { src: '/images/EjerciciosTecnica.jpg', title: 'Ejercicios & Técnica' },
  { src: '/images/GestionUsuarios.jpg', title: 'Gestión de Usuarios' },
  { src: '/images/EliminarUsuario.jpg', title: 'Eliminar Usuario' },
];

const UGGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
    );
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="ug-gallery" id="ug-gallery">
      <div className="container">
        <div className="ug-gallery__wrapper">
          
          {/* Main Monitor Container */}
          <div className="ug-gallery__main">
            {/* Counter integrado estilo display digital */}
            <div className="ug-gallery__counter">
              FRAME: {currentIndex + 1} // {GALLERY_IMAGES.length}
            </div>

            <img
              key={currentIndex} 
              src={GALLERY_IMAGES[currentIndex].src}
              alt={GALLERY_IMAGES[currentIndex].title}
              className="ug-gallery__image"
            />
            
            <div className="ug-gallery__scanline"></div>
            
            <p className="ug-gallery__caption">
              {'>'} {GALLERY_IMAGES[currentIndex].title}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="ug-gallery__controls">
            <button
              type="button"
              className="ug-gallery__btn"
              onClick={previous}
              aria-label="Anterior"
            >
              ‹
            </button>

            <div className="ug-gallery__dots">
              {GALLERY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`ug-gallery__dot ${
                    index === currentIndex ? 'ug-gallery__dot--active' : ''
                  }`}
                  onClick={() => goTo(index)}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              type="button"
              className="ug-gallery__btn"
              onClick={next}
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGGallery;