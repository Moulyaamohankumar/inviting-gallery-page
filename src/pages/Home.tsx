import HeroSection from '@/components/home/HeroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsPreview from '@/components/home/SkillsPreview';

const Home = () => {
  return (
    <div className="relative z-10">
      <HeroSection />
      <FeaturedProjects />
      <SkillsPreview />
    </div>
  );
};

export default Home;