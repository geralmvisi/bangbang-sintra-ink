import PageHeader from '@/components/shared/PageHeader';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Contato"
        subtitle="Fala connosco! Estamos aqui para tirar todas as tuas dúvidas"
      />
      
      <ContactSection />
    </div>
  );
};

export default Contact;