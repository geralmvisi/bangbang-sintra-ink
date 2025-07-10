import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import TeamSection from '@/components/TeamSection';
import WalkInsSection from '@/components/WalkInsSection';
import SignupSection from '@/components/SignupSection';
import ShopSection from '@/components/ShopSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TeamSection />
      <WalkInsSection />
      <SignupSection />
      <ShopSection />
      <ContactSection />
    </div>
  );
};

export default Index;
