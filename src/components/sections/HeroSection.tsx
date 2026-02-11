/* Hero Section - Personal introduction with name and bio */

import './HeroSection.css';


const GREETING = 'Hola, soy ';
const NAME = 'Iván Pons';
const BIO =
  'Full stack developer con visión global, pero con una clara preferencia por el frontend y la creación de interfaces web atractivas. ' +
  'Disfruto transformar ideas en experiencias visuales intuitivas y modernas.';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero__content container">
        {/* ---- Título ---- */}
        <h1 className="hero__title">
          {GREETING}{' '}
          <span className="hero__name">{NAME}</span>
        </h1>

        {/* ---- Bio ---- */}
        <p className="hero__bio">{BIO}</p>
      </div>
    </section>
  );
};

export default HeroSection;
