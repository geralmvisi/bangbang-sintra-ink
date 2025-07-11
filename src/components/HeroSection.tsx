import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Instagram } from 'lucide-react';
import studioInterior from '@/assets/studio-interior.jpg';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <img 
          src={studioInterior}
          alt="BangBang Tattoo Studio Interior"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/0df8e4c2-0398-48b2-b8f6-6e1255ef73d9.png"
            alt="BangBang Tattoo Logo"
            className="w-32 h-32 mx-auto mb-6 animate-float"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="neon-text-pink pulse-neon">BANG</span>
          <span className="neon-text-blue pulse-neon">BANG</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-4 text-foreground">
          Tattoo & Piercing Studio
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Onde a arte encontra a pele. O teu estúdio de referência em Sintra para tatuagens únicas, 
          piercings profissionais e uma experiência inesquecível.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection('gallery')}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Ver Galeria
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection('walkins')}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Walk-ins Aceitos
          </Button>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Localização</h3>
            <p className="text-muted-foreground">Sintra, Portugal</p>
          </div>
          
          <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Horário</h3>
            <p className="text-muted-foreground">Ter-Sáb: 10h-20h</p>
          </div>
          
          <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Especialidades</h3>
            <p className="text-muted-foreground">Tattoos & Piercings</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-pink rounded-full animate-glow-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-neon-blue rounded-full animate-glow-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-neon-purple rounded-full animate-glow-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;