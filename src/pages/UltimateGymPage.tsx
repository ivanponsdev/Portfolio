import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UGHero from '../components/ug/UGHero';
import UGGallery from '../components/ug/UGGallery';
import UGOverview from '../components/ug/UGOverview';
import UGFeatures from '../components/ug/UGFeatures';
import UGFlows from '../components/ug/UGFlows';
import UGTechStack from '../components/ug/UGTechStack';
import UGN8N from '../components/ug/UGN8N';
import UGResults from '../components/ug/UGResults';
import UGCTA from '../components/ug/UGCTA';
import './UltimateGymPage.css';

const UltimateGymPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ug-page">
      {/* Back button */}
      <button
        type="button"
        className="ug-page__back"
        onClick={() => navigate('/')}
        aria-label="Volver al portfolio"
      >
        ← Volver al Portfolio
      </button>

      <main>
        <UGHero />
        <UGGallery />
        <UGOverview />
        <UGFeatures />
        <UGFlows />
        <UGTechStack />
        <UGN8N />
        <UGResults />
        <UGCTA />
      </main>
    </div>
  );
};

export default UltimateGymPage;
