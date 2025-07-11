import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import CTASection from '@/components/shared/CTASection';
import { Button } from '@/components/ui/button';
import { Users, Heart, Calendar } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Quick About Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Mais que tatuagens, criamos arte
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              O BangBang Tattoo é o teu estúdio de referência em Sintra. Aqui, cada tatuagem conta uma história única, 
              feita com paixão e técnica impecável.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Clientes</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Anos</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Amor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <GallerySection />
      
      {/* Page Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Descobre mais sobre nós
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* About Card */}
              <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nossa História</h3>
                <p className="text-muted-foreground mb-4">
                  Conhece a nossa paixão pela arte da tatuagem e os valores que nos movem todos os dias.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/sobre">Saber Mais</a>
                </Button>
              </div>
              
              {/* Walk-ins Card */}
              <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Walk-ins</h3>
                <p className="text-muted-foreground mb-4">
                  Sem agendamento? Sem problema! Aceita-se walk-ins de terça a sábado.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/walk-ins">Como Funciona</a>
                </Button>
              </div>
              
              {/* Team Card */}
              <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300 group md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nossa Crew</h3>
                <p className="text-muted-foreground mb-4">
                  Conhece os artistas talentosos que dão vida às tuas ideias mais criativas.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/equipe">Ver Equipe</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Pronto para a tua próxima tattoo?"
        description="Junta-te a centenas de clientes satisfeitos e cria algo único connosco!"
        primaryButton={{
          text: "Marcar Consulta",
          href: "/contato"
        }}
        secondaryButton={{
          text: "Ver Loja",
          href: "/loja"
        }}
      />
    </div>
  );
};

export default Index;
