import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
}

const CTASection = ({ title, description, primaryButton, secondaryButton }: CTASectionProps) => {
  const navigate = useNavigate();

  const handleClick = (button: { text: string; href?: string; onClick?: () => void }) => {
    if (button.onClick) {
      button.onClick();
    } else if (button.href) {
      if (button.href.startsWith('/')) {
        navigate(button.href);
      } else if (button.href.startsWith('#')) {
        const element = document.getElementById(button.href.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(button.href, '_blank');
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-glow">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            {title}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow px-8 py-6 text-lg font-semibold"
              onClick={() => handleClick(primaryButton)}
            >
              {primaryButton.text}
            </Button>
            
            {secondaryButton && (
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold"
                onClick={() => handleClick(secondaryButton)}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;