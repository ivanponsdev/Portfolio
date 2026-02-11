import Navbar from '../components/Navbar';
import LandingSection from '../components/sections/LandingSection';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar showAfterLanding={true} />
      <main>
        <LandingSection />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
};

export default HomePage;
