import { useState } from 'react';
import { Button } from '@/components/ui/button';

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

  // Placeholder gallery items - in a real app, these would come from a CMS or API
  const galleryItems = [
    { id: 1, category: 'traditional', title: 'Rosa Traditional', image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2b2a96?w=400&h=400&fit=crop' },
    { id: 2, category: 'realism', title: 'Retrato Realista', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop' },
    { id: 3, category: 'fineline', title: 'Fine Line Floral', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop' },
    { id: 4, category: 'blackwork', title: 'Mandala Blackwork', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop' },
    { id: 5, category: 'color', title: 'Aquarela Colorida', image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=400&h=400&fit=crop' },
    { id: 6, category: 'lettering', title: 'Script Lettering', image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=400&fit=crop' },
    { id: 7, category: 'traditional', title: 'Caveira Traditional', image: 'https://images.unsplash.com/photo-1508792227116-b7d2dbe39334?w=400&h=400&fit=crop' },
    { id: 8, category: 'realism', title: 'Animal Realista', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop' },
    { id: 9, category: 'fineline', title: 'Geometric Fine Line', image: 'https://images.unsplash.com/photo-1611195974226-ef16628f2890?w=400&h=400&fit=crop' },
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