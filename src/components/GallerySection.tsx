import { useState } from 'react';
import { Button } from '@/components/ui/button';
import tattooRealistic from '@/assets/tattoo-realistic.jpg';
import tattooTraditional from '@/assets/tattoo-traditional.jpg';
import tattooFineline from '@/assets/tattoo-fineline.jpg';
import tattooBlackwork from '@/assets/tattoo-blackwork.jpg';
import tattooColor from '@/assets/tattoo-color.jpg';
import tattooLettering from '@/assets/tattoo-lettering.jpg';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'Todos' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'realism', name: 'Realismo' },
    { id: 'fineline', name: 'Fine Line' },
    { id: 'blackwork', name: 'Blackwork' },
    { id: 'color', name: 'Coloridas' },
    { id: 'lettering', name: 'Lettering' },
  ];

  // Gallery items with professional tattoo images
  const galleryItems = [
    { id: 1, category: 'traditional', title: 'Rosa Traditional', image: tattooTraditional },
    { id: 2, category: 'realism', title: 'Retrato Realista', image: tattooRealistic },
    { id: 3, category: 'fineline', title: 'Fine Line Floral', image: tattooFineline },
    { id: 4, category: 'blackwork', title: 'Mandala Blackwork', image: tattooBlackwork },
    { id: 5, category: 'color', title: 'Aquarela Colorida', image: tattooColor },
    { id: 6, category: 'lettering', title: 'Script Lettering', image: tattooLettering },
    { id: 7, category: 'traditional', title: 'Flash Traditional', image: tattooTraditional },
    { id: 8, category: 'realism', title: 'Retrato Feminino', image: tattooRealistic },
    { id: 9, category: 'fineline', title: 'Geometric Fine Line', image: tattooFineline },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Nossa Galeria</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada obra é única, assim como a pessoa que a carrega. Descobre alguns dos nossos trabalhos mais recentes.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-primary text-primary-foreground shadow-neon-pink' 
                    : 'border-border hover:border-primary hover:text-primary'
                }`}
              >
                {filter.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-card shadow-card hover:shadow-glow transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                      {filters.find(f => f.id === item.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Neon border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Gostaste do que viste? Vamos criar algo único para ti!
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow px-8 py-3"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Marcar Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;