import PageHeader from '@/components/shared/PageHeader';
import WalkInsSection from '@/components/WalkInsSection';
import CTASection from '@/components/shared/CTASection';

const WalkIns = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Walk-ins"
        subtitle="Aceita-se walk-ins! Aparece quando puderes, estamos sempre prontos para criar arte"
      />
      
      <WalkInsSection />
      
      <CTASection
        title="Tens uma ideia para hoje?"
        description="Não precisas de agendamento. Aparece no estúdio e vamos fazer acontecer!"
        primaryButton={{
          text: "Como Chegar",
          href: "/contato"
        }}
        secondaryButton={{
          text: "Ver Horários",
          href: "#walkins"
        }}
      />
    </div>
  );
};

export default WalkIns;