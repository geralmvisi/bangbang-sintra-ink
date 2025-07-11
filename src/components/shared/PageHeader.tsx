import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
}

const PageHeader = ({ title, subtitle, showBackButton = true }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-dark pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {showBackButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Button>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{title}</span>
          </h1>
          
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;