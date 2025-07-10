import { Instagram, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sofia Mendes',
      artistName: '@sofia_ink',
      specialties: ['Realismo', 'Retratos', 'Fine Line'],
      experience: '8 anos',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c13b30e3?w=400&h=400&fit=crop&face',
      bio: 'Especialista em realismo e retratos. Sofia transforma memórias em arte permanente com uma precisão impressionante.',
      instagram: 'sofia_ink_bangbang'
    },
    {
      id: 2,
      name: 'Marco Silva',
      artistName: '@marco_traditional',
      specialties: ['Traditional', 'Neo-Traditional', 'Blackwork'],
      experience: '6 anos',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face',
      bio: 'Master do estilo traditional com twist moderno. Cada trabalho do Marco é uma homenagem aos clássicos da tatuagem.',
      instagram: 'marco_traditional_ink'
    },
    {
      id: 3,
      name: 'Ana Costa',
      artistName: '@ana_fineline',
      specialties: ['Fine Line', 'Minimalista', 'Floral'],
      experience: '4 anos',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&face',
      bio: 'A rainha do fine line! Ana cria peças delicadas e elegantes que parecem desenhos feitos à mão na pele.',
      instagram: 'ana_fineline_art'
    },
    {
      id: 4,
      name: 'João Pereira',
      artistName: '@joao_blackwork',
      specialties: ['Blackwork', 'Geometric', 'Tribais Modernos'],
      experience: '10 anos',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face',
      bio: 'Veterano do blackwork com paixão por padrões geométricos. João transforma conceitos complexos em arte visual.',
      instagram: 'joao_blackwork_master'
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Nossa Crew</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conhece os artistas que vão dar vida às tuas ideias. Cada um com o seu estilo único e paixão pela arte.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="group bg-card rounded-xl shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                        <a 
                          href={`https://instagram.com/${member.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      </div>
                      
                      <p className="text-primary font-medium mb-2">{member.artistName}</p>
                      
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-foreground">Especialidades: </span>
                          <span className="text-sm text-muted-foreground">
                            {member.specialties.join(', ')}
                          </span>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium text-foreground">Experiência: </span>
                          <span className="text-sm text-muted-foreground">{member.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="h-1 bg-gradient-neon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card/50 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Queres fazer parte da nossa crew?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos sempre à procura de talentos únicos! Se és tatuador e queres juntar-te à nossa família, 
              inscreve-te e mostra-nos o teu trabalho.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              onClick={() => {
                const element = document.getElementById('signup');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Candidatar-me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;