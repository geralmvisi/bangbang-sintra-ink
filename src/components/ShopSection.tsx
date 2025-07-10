import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Shirt, Image, Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ShopSection = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: Palette },
    { id: 'clothing', name: 'Roupa', icon: Shirt },
    { id: 'prints', name: 'Prints', icon: Image },
    { id: 'accessories', name: 'Acessórios', icon: Star },
  ];

  const products = [
    {
      id: 1,
      name: 'T-Shirt BangBang Neon',
      category: 'clothing',
      price: 25,
      originalPrice: 35,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      description: 'T-shirt preta com logo neon do BangBang',
      badge: 'Bestseller',
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 2,
      name: 'Hoodie BangBang Crew',
      category: 'clothing',
      price: 45,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      description: 'Hoodie premium com bordado exclusivo',
      colors: ['Preto', 'Navy']
    },
    {
      id: 3,
      name: 'Print "Flash Tattoos"',
      category: 'prints',
      price: 15,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      description: 'Poster A3 com flash tattoos exclusivos do estúdio',
      badge: 'Limitado'
    },
    {
      id: 4,
      name: 'Boné BangBang Logo',
      category: 'accessories',
      price: 20,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
      description: 'Boné snapback com logo bordado',
      colors: ['Preto', 'Branco']
    },
    {
      id: 5,
      name: 'Stickers Pack',
      category: 'accessories',
      price: 8,
      originalPrice: 12,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      description: 'Pack de 10 stickers com designs exclusivos',
      badge: 'Novo'
    },
    {
      id: 6,
      name: 'Print "Neon Dreams"',
      category: 'prints',
      price: 18,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
      description: 'Print artístico inspirado no neon do estúdio',
      badge: 'Exclusivo'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Adicionado ao carrinho!",
      description: `${productName} foi adicionado ao teu carrinho.`,
    });
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'default';
      case 'Limitado': return 'secondary';
      case 'Novo': return 'default';
      case 'Exclusivo': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <section id="shop" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Loja BangBang</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leva um pedacinho do BangBang contigo! Produtos exclusivos desenhados pela nossa crew.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-primary text-primary-foreground shadow-neon-pink' 
                      : 'border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-card rounded-xl shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge variant={getBadgeVariant(product.badge)} className="font-medium">
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
                      onClick={() => handleAddToCart(product.name)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Adicionar
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Colors */}
                  {product.colors && (
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Cores disponíveis:</p>
                      <div className="flex gap-2">
                        {product.colors.map((color) => (
                          <span key={color} className="text-xs px-2 py-1 bg-muted rounded-full">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">
                        €{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          €{product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => handleAddToCart(product.name)}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Queres algo personalizado?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Fazemos designs personalizados para camisetas, prints e acessórios. 
              Fala connosco e criamos algo único só para ti!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow px-8 py-3"
                onClick={() => window.open('https://wa.me/351912345678', '_blank')}
              >
                Pedir Personalizado
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mais Informações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;