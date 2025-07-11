import PageHeader from '@/components/shared/PageHeader';
import ShopSection from '@/components/ShopSection';
import CTASection from '@/components/shared/CTASection';

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Loja"
        subtitle="Produtos exclusivos do BangBang Tattoo - veste a nossa arte"
      />
      
      <ShopSection />
      
      <CTASection
        title="Não encontras o que procuras?"
        description="Temos mais produtos na loja física e podemos criar algo personalizado para ti!"
        primaryButton={{
          text: "Visitar Estúdio",
          href: "/contato"
        }}
        secondaryButton={{
          text: "Produto Personalizado",
          href: "/contato"
        }}
      />
    </div>
  );
};

export default Shop;