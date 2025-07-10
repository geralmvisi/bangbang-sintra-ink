import { Clock, MapPin, Users, CheckCircle, AlertCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WalkInsSection = () => {
  return (
    <section id="walkins" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Walk-ins Welcome!</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aparece quando quiseres! Aceitamos walk-ins e temos sempre alguém disponível para te atender.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Walk-ins Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">O que são Walk-ins?</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Walk-ins são clientes que aparecem no estúdio sem agendamento prévio. No BangBang, 
                  adoramos a espontaneidade! Se tens uma ideia na cabeça e queres fazer já, aparece!
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Sem compromisso, sem stress</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Preços especiais para walk-ins</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tatuagens pequenas e médias</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Ambiente descontraído e acolhedor</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Horários Walk-in</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-foreground font-medium">Terça a Quinta</span>
                    <span className="text-muted-foreground">14h - 19h</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-foreground font-medium">Sexta e Sábado</span>
                    <span className="text-muted-foreground">12h - 20h</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-foreground font-medium">Domingo</span>
                    <span className="text-muted-foreground">Só agendamento</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      <strong>Dica:</strong> Para evitares espera, liga antes de vires para confirmar disponibilidade!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions for Clients */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Como Funciona</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Aparece no Estúdio</h4>
                      <p className="text-muted-foreground text-sm">
                        Vem até nós durante os horários walk-in. Não precisas de marcação!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Consulta Rápida</h4>
                      <p className="text-muted-foreground text-sm">
                        Falamos sobre a tua ideia, vemos o que é possível fazer e damos orçamento na hora.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Bora Tatuar!</h4>
                      <p className="text-muted-foreground text-sm">
                        Se estivermos livres e a tattoo for pequena/média, fazemos no momento!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-dark rounded-xl p-8 border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  O que podes fazer em walk-in:
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-card/50 rounded-lg">
                    <span className="text-2xl mb-2 block">✨</span>
                    <p className="text-sm font-medium text-foreground">Flash Tattoos</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg">
                    <span className="text-2xl mb-2 block">🖋️</span>
                    <p className="text-sm font-medium text-foreground">Lettering</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg">
                    <span className="text-2xl mb-2 block">🌸</span>
                    <p className="text-sm font-medium text-foreground">Fine Line</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg">
                    <span className="text-2xl mb-2 block">⚫</span>
                    <p className="text-sm font-medium text-foreground">Pequenos Blackwork</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow px-8 py-3"
                    onClick={() => window.open('https://wa.me/351912345678', '_blank')}
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Vem ter connosco!
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Location info */}
          <div className="text-center bg-card rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Encontra-nos facilmente</h3>
            <p className="text-muted-foreground mb-6">
              Estamos localizados no coração de Sintra, fácil de chegar e com estacionamento próximo.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://maps.google.com/?q=Sintra+Portugal', '_blank')}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ver no Google Maps
              </Button>
              <Button 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.open('https://wa.me/351912345678', '_blank')}
              >
                📱 WhatsApp: +351 912 345 678
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalkInsSection;