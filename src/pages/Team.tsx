import PageHeader from '@/components/shared/PageHeader';
import TeamSection from '@/components/TeamSection';
import SignupSection from '@/components/SignupSection';
import CTASection from '@/components/shared/CTASection';

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Nossa Crew"
        subtitle="Conhece os artistas talentosos que dão vida às tuas ideias"
      />
      
      <TeamSection />
      <SignupSection />
      
      <CTASection
        title="Queres fazer parte da crew?"
        description="Estamos sempre à procura de talentos. Se és apaixonado pela arte da tatuagem, queremos conhecer-te!"
        primaryButton={{
          text: "Candidatar-me",
          href: "#signup"
        }}
        secondaryButton={{
          text: "Ver Trabalhos",
          href: "/#gallery"
        }}
      />
    </div>
  );
};

export default Team;