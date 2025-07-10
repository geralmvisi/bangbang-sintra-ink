import { Users, Award, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Sobre o Estúdio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais que um estúdio, somos uma família apaixonada pela arte da tatuagem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                A nossa história começou com uma paixão
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                O BangBang Tattoo nasceu da vontade de criar um espaço onde arte e personalidade se encontram. 
                Aqui em Sintra, criamos um ambiente acolhedor onde cada cliente se sente em casa.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que cada tatuagem conta uma história única. A nossa missão é transformar as tuas ideias 
                em arte permanente, com técnica impecável e todo o carinho que mereces.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos mais que tatuadores - somos contadores de histórias, artistas e, acima de tudo, 
                uma crew que respira arte todos os dias.
              </p>

              <div className="pt-6">
                <p className="text-primary font-semibold text-lg">
                  "Cada tattoo é uma obra de arte única, como a pessoa que a carrega."
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-card">
                <img 
                  src="/lovable-uploads/9b7a1e00-8b2e-4d63-8e39-2253e349e915.png"
                  alt="Equipe BangBang Tattoo"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary rounded-lg opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-secondary rounded-lg opacity-40"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-all duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-foreground mb-2">500+</h4>
              <p className="text-muted-foreground">Clientes Felizes</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-all duration-300">
              <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-foreground mb-2">5+</h4>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-all duration-300">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-foreground mb-2">24/7</h4>
              <p className="text-muted-foreground">Cuidados Pós-Tattoo</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-all duration-300">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-foreground mb-2">100%</h4>
              <p className="text-muted-foreground">Amor pelo que Fazemos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;