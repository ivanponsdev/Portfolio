import Navbar from '../components/Navbar';
import LandingSection from '../components/sections/LandingSection';
import HeroSection from '../components/sections/HeroSection';
import AboutMe from '../components/sections/AboutMe';
import WhatIDo from '../components/sections/WhatIDo';
import TechStack from '../components/sections/TechStack';
import ProjectsSection from '../components/sections/ProjectsSection';
import ScrollDownArrow from '../components/ScrollDownArrow';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar showAfterLanding={true} />
      <ScrollDownArrow />
      <main>
        <LandingSection />
        <HeroSection />
        <AboutMe />
        <WhatIDo />
        <TechStack />
        <ProjectsSection />
      </main>
    </>
  );
};

export default HomePage;
