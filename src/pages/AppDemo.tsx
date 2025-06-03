import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  Thermometer, 
  Droplets, 
  Wind,
  CloudRain,
  Sun,
  AlertTriangle,
  Bell,
  Calendar,
  TrendingUp,
  Sprout,
  MapPin,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const AppDemo = () => {
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState({
    temperature: 18,
    humidity: 72,
    windSpeed: 8,
    rainfall: 0.2,
    pressure: 1013,
    uvIndex: 6
  });

  const [alerts] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'Geada Prevista',
      message: 'Temperatura pode cair para 2°C nas próximas 6 horas. Proteja sua lavoura.',
      time: '2 horas atrás'
    },
    {
      id: 2,
      type: 'info',
      title: 'Momento Ideal para Irrigação',
      message: 'Umidade do solo baixa. Recomendamos irrigação entre 18h-20h.',
      time: '4 horas atrás'
    }
  ]);

  const [forecast] = useState([
    { day: 'Hoje', icon: <CloudRain className="h-6 w-6" />, temp: '18°C', rain: '70%' },
    { day: 'Amanhã', icon: <Sun className="h-6 w-6" />, temp: '22°C', rain: '10%' },
    { day: 'Quinta', icon: <Sun className="h-6 w-6" />, temp: '25°C', rain: '5%' },
    { day: 'Sexta', icon: <CloudRain className="h-6 w-6" />, temp: '19°C', rain: '80%' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWeatherData(prev => ({
        ...prev,
        temperature: Math.round(prev.temperature + (Math.random() - 0.5) * 0.3),
        humidity: Math.max(40, Math.min(95, prev.humidity + (Math.random() - 0.5) * 1)),
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 1),
        rainfall: Math.max(0, prev.rainfall + (Math.random() - 0.8) * 0.05)
      }));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <div className="flex items-center">
            <Sprout className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-bold">AgroTempo</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Localização */}
        <div className="flex items-center justify-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span>Guarapuava, PR - Fazenda AgroTempo</span>
        </div>

        {/* Dados Atuais */}
        <Card className="bg-gradient-to-br from-blue-500 to-green-500 text-white border-none">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <CloudRain className="h-16 w-16 mx-auto mb-2 opacity-80" />
              <div className="text-4xl font-bold mb-2">{weatherData.temperature}°C</div>
              <div className="text-lg opacity-90">Parcialmente nublado</div>
              <div className="text-sm opacity-75">Sensação térmica: {weatherData.temperature + 2}°C</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <Droplets className="h-6 w-6 mx-auto mb-1 opacity-80" />
                <div className="text-xl font-semibold">{weatherData.humidity}%</div>
                <div className="text-xs opacity-75">Umidade</div>
              </div>
              <div className="text-center">
                <Wind className="h-6 w-6 mx-auto mb-1 opacity-80" />
                <div className="text-xl font-semibold">{weatherData.windSpeed.toFixed(1)}</div>
                <div className="text-xs opacity-75">km/h</div>
              </div>
              <div className="text-center">
                <CloudRain className="h-6 w-6 mx-auto mb-1 opacity-80" />
                <div className="text-xl font-semibold">{weatherData.rainfall.toFixed(1)}</div>
                <div className="text-xs opacity-75">mm chuva</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-6 w-6 mx-auto mb-1 opacity-80" />
                <div className="text-xl font-semibold">{weatherData.pressure}</div>
                <div className="text-xs opacity-75">hPa</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alertas */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Bell className="h-5 w-5 mr-2 text-yellow-600" />
              Alertas Importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-sm">{alert.title}</div>
                  <div className="text-gray-600 text-sm">{alert.message}</div>
                  <div className="text-gray-400 text-xs mt-1">{alert.time}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Previsão */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Previsão dos Próximos Dias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-600">
                      {day.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{day.day}</div>
                      <div className="text-sm text-gray-600">Chuva: {day.rain}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-800">{day.temp}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recomendações */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Sprout className="h-5 w-5 mr-2 text-green-600" />
              Recomendações para Hoje
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="font-semibold text-green-800 text-sm">🌱 Plantio</div>
              <div className="text-green-700 text-sm">Condições adequadas para plantio de hortaliças. Aproveite a umidade do solo.</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="font-semibold text-blue-800 text-sm">💧 Irrigação</div>
              <div className="text-blue-700 text-sm">Reduza a irrigação em 30%. Chuva esperada nas próximas 24h.</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="font-semibold text-yellow-800 text-sm">⚠️ Proteção</div>
              <div className="text-yellow-700 text-sm">Prepare proteção contra geada para as próximas madrugadas.</div>
            </div>
          </CardContent>
        </Card>

        {/* Botão de Ação */}
        <div className="text-center pt-4">
          <Button 
            onClick={() => navigate('/')}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
          >
            Conhecer a Solução Completa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
