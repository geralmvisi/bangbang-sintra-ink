import { MapPin, Phone, Instagram, Clock, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Recebemos a tua mensagem. Responderemos em breve!",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      details: ['Rua da Tattoo, 123', 'Sintra, Portugal'],
      action: () => window.open('https://maps.google.com/?q=Sintra+Portugal', '_blank')
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+351 912 345 678'],
      action: () => window.open('tel:+351912345678', '_blank')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['Mensagem direta'],
      action: () => window.open('https://wa.me/351912345678', '_blank')
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: ['@bangbang_tattoo_sintra'],
      action: () => window.open('https://instagram.com/bangbang_tattoo_sintra', '_blank')
    }
  ];

  const schedules = [
    { day: 'Segunda-feira', hours: 'Fechado', closed: true },
    { day: 'Terça a Quinta', hours: '10h - 20h', closed: false },
    { day: 'Sexta e Sábado', hours: '10h - 21h', closed: false },
    { day: 'Domingo', hours: '12h - 18h', closed: false }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Contacta-nos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tens alguma pergunta? Queres marcar uma consulta? Fala connosco! Estamos sempre prontos para te ajudar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info & Form */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={index}
                      className="bg-card shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer group"
                      onClick={info.action}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Hours */}
              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    Horário de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedules.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className={`font-medium ${schedule.closed ? 'text-muted-foreground' : 'text-foreground'}`}>
                          {schedule.day}
                        </span>
                        <span className={`${schedule.closed ? 'text-destructive' : 'text-primary'} font-medium`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground">
                      <strong>Walk-ins aceitos:</strong> Terça a Sábado das 14h-19h. 
                      Para sessões longas, recomendamos agendamento prévio.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Enviar Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone/WhatsApp</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        placeholder="+351 912 345 678"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                        placeholder="Conta-nos sobre a tua ideia, dúvidas ou o que precisas..."
                        required
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow py-6 text-lg font-semibold"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">Ou contacta-nos diretamente:</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open('https://wa.me/351912345678', '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => window.open('https://instagram.com/bangbang_tattoo_sintra', '_blank')}
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center border-t border-border pt-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/0df8e4c2-0398-48b2-b8f6-6e1255ef73d9.png"
                alt="BangBang Tattoo Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="neon-text-pink font-bold text-xl">BangBang Tattoo Sintra</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 BangBang Tattoo Sintra. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;