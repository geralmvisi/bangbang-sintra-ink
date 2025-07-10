import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, UserPlus, Star, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SignupSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    artistName: '',
    portfolio: '',
    styles: [],
    experience: '',
    availability: '',
    contact: '',
    message: '',
    privacyAccepted: false
  });

  const styles = [
    'Traditional', 'Neo-Traditional', 'Realismo', 'Fine Line', 'Blackwork', 
    'Lettering', 'Aquarela', 'Geométrico', 'Minimalista', 'Color', 'Tribais'
  ];

  const handleStyleToggle = (style: string) => {
    setFormData(prev => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter(s => s !== style)
        : [...prev.styles, style]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      toast({
        title: "Política de Privacidade",
        description: "É necessário aceitar a política de privacidade para continuar.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Candidatura Enviada!",
      description: "Recebemos a tua candidatura. Entraremos em contacto em breve!",
    });

    // Reset form
    setFormData({
      name: '',
      artistName: '',
      portfolio: '',
      styles: [],
      experience: '',
      availability: '',
      contact: '',
      message: '',
      privacyAccepted: false
    });
  };

  return (
    <section id="signup" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Junta-te à Crew</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estás pronto para fazer parte da família BangBang? Preenche o formulário e mostra-nos o teu talento!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="bg-card shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <UserPlus className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Porque BangBang?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Ambiente criativo e inspirador
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Clientela diversificada
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Suporte e formação contínua
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Equipamento de topo
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">O que Procuramos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• Paixão pela arte da tatuagem</li>
                    <li>• Técnica sólida e criatividade</li>
                    <li>• Atendimento ao cliente exemplar</li>
                    <li>• Vontade de crescer connosco</li>
                    <li>• Disponibilidade flexível</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Formulário de Candidatura</CardTitle>
                  <CardDescription className="text-center">
                    Preenche todos os campos para completares a tua candidatura
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="artistName">Nome Artístico *</Label>
                        <Input
                          id="artistName"
                          value={formData.artistName}
                          onChange={(e) => setFormData(prev => ({...prev, artistName: e.target.value}))}
                          placeholder="ex: @meu_nome_ink"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Portfolio */}
                    <div>
                      <Label htmlFor="portfolio">Instagram/Portfólio *</Label>
                      <Input
                        id="portfolio"
                        value={formData.portfolio}
                        onChange={(e) => setFormData(prev => ({...prev, portfolio: e.target.value}))}
                        placeholder="@meu_instagram ou link do portfólio"
                        required
                        className="mt-1"
                      />
                    </div>

                    {/* Styles */}
                    <div>
                      <Label>Estilos de Tatuagem *</Label>
                      <p className="text-sm text-muted-foreground mb-3">Seleciona os estilos que dominas</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {styles.map((style) => (
                          <div key={style} className="flex items-center space-x-2">
                            <Checkbox
                              id={style}
                              checked={formData.styles.includes(style)}
                              onCheckedChange={() => handleStyleToggle(style)}
                            />
                            <Label htmlFor={style} className="text-sm">{style}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <Label htmlFor="experience">Anos de Experiência *</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, experience: value}))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Seleciona a tua experiência" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="iniciante">Iniciante (0-1 anos)</SelectItem>
                          <SelectItem value="junior">Júnior (1-3 anos)</SelectItem>
                          <SelectItem value="intermedio">Intermédio (3-5 anos)</SelectItem>
                          <SelectItem value="senior">Sénior (5-10 anos)</SelectItem>
                          <SelectItem value="expert">Expert (10+ anos)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Availability */}
                    <div>
                      <Label htmlFor="availability">Disponibilidade *</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, availability: value}))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Qual a tua disponibilidade?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fulltime">Full-time (40h/semana)</SelectItem>
                          <SelectItem value="parttime">Part-time (20h/semana)</SelectItem>
                          <SelectItem value="weekends">Fins de semana</SelectItem>
                          <SelectItem value="flexible">Horário flexível</SelectItem>
                          <SelectItem value="occasional">Trabalhos pontuais</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Contact */}
                    <div>
                      <Label htmlFor="contact">Contacto (WhatsApp/Telefone) *</Label>
                      <Input
                        id="contact"
                        value={formData.contact}
                        onChange={(e) => setFormData(prev => ({...prev, contact: e.target.value}))}
                        placeholder="+351 912 345 678"
                        required
                        className="mt-1"
                      />
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message">Mensagem Adicional</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                        placeholder="Conta-nos um pouco sobre ti, o que te motiva, objetivos..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    {/* File Upload Info */}
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="flex items-start gap-3">
                        <Upload className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Documentos Adicionais</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Podes enviar posteriormente por WhatsApp:
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Portfólio completo (PDF ou link)</li>
                            <li>• Certificados de formação</li>
                            <li>• Referências de trabalhos anteriores</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Privacy Policy */}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacyAccepted}
                        onCheckedChange={(checked) => setFormData(prev => ({...prev, privacyAccepted: checked as boolean}))}
                        required
                      />
                      <Label htmlFor="privacy" className="text-sm leading-relaxed">
                        Aceito a <span className="text-primary">política de privacidade</span> e 
                        autorizo o tratamento dos meus dados pessoais para fins de recrutamento. 
                        Os dados serão mantidos confidenciais e utilizados apenas para contacto 
                        relacionado com esta candidatura.
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow py-6 text-lg font-semibold"
                    >
                      <UserPlus className="w-5 h-5 mr-2" />
                      Enviar Candidatura
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;