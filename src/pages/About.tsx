import PageHeader from '@/components/shared/PageHeader';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/shared/CTASection';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Sobre Nós"
        subtitle="Conhece a nossa história, valores e a crew que faz a magia acontecer"
      />
      
      <AboutSection />
      <TeamSection />
      
      <CTASection
        title="Pronto para fazer parte da família?"
        description="Junta-te a centenas de clientes satisfeitos e cria a tua próxima obra de arte connosco."
        primaryButton={{
          text: "Marcar Consulta",
          href: "/contato"
        }}
        secondaryButton={{
          text: "Ver Galeria",
          href: "/#gallery"
        }}
      />
    </div>
  );
};

export default About;