import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Thermometer, 
  Droplets, 
  Wind,
  Smartphone,
  Satellite,
  Bell,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Sprout,
  Tractor
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState({
    temperature: 18,
    humidity: 72,
    windSpeed: 8,
    rainfall: 0.2
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simular mudanças nos dados meteorológicos adaptados para Guarapuava
      setWeatherData(prev => ({
        temperature: Math.round(prev.temperature + (Math.random() - 0.5) * 0.5),
        humidity: Math.max(40, Math.min(95, prev.humidity + (Math.random() - 0.5) * 2)),
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 2),
        rainfall: Math.max(0, prev.rainfall + (Math.random() - 0.8) * 0.1)
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-green-500 to-blue-500 text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sprout className="h-16 w-16 mr-4 text-yellow-300" />
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                AgroTempo
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-light mb-8">
              Clima certo. Produtividade no ponto.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <Thermometer className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl font-bold">{weatherData.temperature}°C</div>
                  <div className="text-sm opacity-90">Temperatura</div>
                </div>
                <div>
                  <Droplets className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                  <div className="text-2xl font-bold">{weatherData.humidity}%</div>
                  <div className="text-sm opacity-90">Umidade</div>
                </div>
                <div>
                  <Wind className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                  <div className="text-2xl font-bold">{weatherData.windSpeed.toFixed(1)}</div>
                  <div className="text-sm opacity-90">km/h Vento</div>
                </div>
                <div>
                  <CloudRain className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                  <div className="text-2xl font-bold">{weatherData.rainfall.toFixed(1)}</div>
                  <div className="text-sm opacity-90">mm Chuva</div>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('solucao')} 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-full"
            >
              Quero saber mais
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-green-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'problema', label: 'Problema' },
              { id: 'solucao', label: 'Solução' },
              { id: 'funciona', label: 'Como Funciona' },
              { id: 'mercado', label: 'Mercado' },
              { id: 'contato', label: 'Contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-green-700 hover:text-green-900 font-medium px-4 py-2 rounded-lg hover:bg-green-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Problema */}
      <section id="problema" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Tractor className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">O Problema</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Previsões genéricas não ajudam no campo. Os produtores precisam de dados precisos e localizados.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  'Previsões imprecisas para áreas rurais',
                  'Perdas significativas na lavoura',
                  'Irrigação ineficiente e desperdício',
                  'Atraso no plantio e na colheita'
                ].map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-red-600 mb-4">20%</div>
                <p className="text-lg text-red-700">
                  Menos de 20% dos pequenos produtores usam tecnologia climática de precisão
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="py-20 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <Satellite className="h-16 w-16 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nossa Solução</h2>
            <p className="text-2xl text-green-700 font-semibold mb-8">
              AgroTempo – Sua estação meteorológica pessoal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-green-600" />,
                title: 'Instalação Fácil',
                description: 'Sem necessidade de técnicos especializados'
              },
              {
                icon: <Thermometer className="h-12 w-12 text-blue-600" />,
                title: 'Dados em Tempo Real',
                description: 'Temperatura, umidade, chuva e vento'
              },
              {
                icon: <Bell className="h-12 w-12 text-yellow-600" />,
                title: 'Alertas Personalizados',
                description: 'Geada, seca e chuvas intensas'
              },
              {
                icon: <Smartphone className="h-12 w-12 text-purple-600" />,
                title: 'App Intuitivo',
                description: 'Recomendações para irrigação e plantio'
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="funciona" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Smartphone className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Veja Como Funciona</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Satellite className="h-16 w-16 text-green-600" />,
                title: 'Estação AgroTempo',
                description: 'Instalada no seu terreno, coleta dados precisos 24 horas por dia'
              },
              {
                icon: <Smartphone className="h-16 w-16 text-blue-600" />,
                title: 'Aplicativo AgroTempo',
                description: 'Receba informações locais e práticas diretamente no seu celular'
              },
              {
                icon: <Bell className="h-16 w-16 text-yellow-600" />,
                title: 'Notificações Inteligentes',
                description: '"⚠ Geada prevista nas próximas 24h — proteja sua lavoura."'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Testado por produtores na região de Guarapuava
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Droplets className="h-8 w-8 text-blue-600" />, text: 'Economia de água' },
                { icon: <TrendingUp className="h-8 w-8 text-green-600" />, text: 'Melhor planejamento' },
                { icon: <CheckCircle className="h-8 w-8 text-green-600" />, text: 'Redução de perdas' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center">
                  {benefit.icon}
                  <span className="ml-3 text-lg font-medium text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mercado */}
      <section id="mercado" className="py-20 px-4 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Mercado e Impacto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Público-alvo</h3>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-green-600 mr-3" />
                  <span className="text-3xl font-bold text-green-600">+4 milhões</span>
                </div>
                <p className="text-lg text-gray-600">pequenos produtores no Brasil</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Parcerias</h3>
              <ul className="space-y-3">
                {[
                  'Cooperativas agrícolas',
                  'Sindicatos rurais',
                  'Associações de produtores'
                ].map((partner, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-lg text-gray-700">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Próximos Passos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50</div>
                <p className="text-lg text-gray-600">Piloto com unidades na região Sul do país</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-2 text-green-600" />
                <p className="text-lg text-gray-600">Escalonamento com fornecedores locais</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button 
                onClick={() => scrollToSection('contato')}
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full"
              >
                Quero ser parceiro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Phone className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contato</h2>
            <p className="text-xl text-gray-600">
              Entre em contato e leve o AgroTempo para sua região
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="h-8 w-8 text-green-600" />,
                title: 'Email',
                content: 'contato@agrotempo.com.br',
                link: 'mailto:contato@agrotempo.com.br'
              },
              {
                icon: <Phone className="h-8 w-8 text-blue-600" />,
                title: 'Telefone',
                content: '(42) 9 9999-9999',
                link: 'tel:+5542999999999'
              },
              {
                icon: <MapPin className="h-8 w-8 text-red-600" />,
                title: 'Localização',
                content: 'Guarapuava – PR',
                link: '#'
              }
            ].map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {contact.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-800">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={contact.link} 
                    className="text-lg text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {contact.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">Siga-nos nas redes sociais:</p>
            <div className="flex justify-center space-x-6">
              {['Instagram', 'Facebook', 'LinkedIn'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sprout className="h-8 w-8 mr-3 text-green-400" />
            <span className="text-2xl font-bold">AgroTempo</span>
          </div>
          <p className="text-gray-300 mb-4">© 2025 AgroTempo — Todos os direitos reservados.</p>
          <p className="text-green-400 font-medium">Clima certo. Produtividade no ponto.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
