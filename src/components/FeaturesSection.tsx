import React, { useState } from 'react';

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('coverage');

  const features = {
    coverage: {
      title: "Cobertura Superior",
      subtitle: "A proteção mais completa do mercado",
      stats: [
        { number: "2.500+", label: "Hospitais e Clínicas" },
        { number: "15.000+", label: "Médicos Especialistas" },
        { number: "100%", label: "Cobertura Estadual" },
        { number: "24/7", label: "Urgência e Emergência" }
      ],
      highlights: [
        "Consultas, exames e cirurgias sem carência",
        "Internação em quarto particular",
        "UTI e CTI completos",
        "Transplantes e procedimentos complexos"
      ]
    },
    technology: {
      title: "Tecnologia e Inovação",
      subtitle: "Saúde digital para sua comodidade",
      stats: [
        { number: "App Próprio", label: "Gerenciamento Online" },
        { number: "Telemedicina", label: "Consultas por Vídeo" },
        { number: "AI Health", label: "Assistente Virtual" },
        { number: "Digital", label: "100% Online" }
      ],
      highlights: [
        "Agendamento de consultas pelo aplicativo",
        "Resultados de exames digitais",
        "Prontuário médico online",
        "Lembretes de vacinação e check-ups"
      ]
    },
    wellness: {
      title: "Programa de Bem-Estar",
      subtitle: "Cuidado integral para sua saúde",
      stats: [
        { number: "50+", label: "Programas de Saúde" },
        { number: "365", label: "Dias de Acompanhamento" },
        { number: "Personal", label: "Plano Individual" },
        { number: "Grátis", label: "Para Clientes" }
      ],
      highlights: [
        "Acompanhamento nutricional",
        "Programas de atividade física",
        "Saúde mental e emocional",
        "Check-ups preventivos anuais"
      ]
    }
  };

  const comparisonData = [
    {
      feature: "Rede de Hospitais",
      ourPlan: "2.500+ estabelecimentos",
      competitor1: "1.200 estabelecimentos",
      competitor2: "800 estabelecimentos"
    },
    {
      feature: "Carência para Consultas",
      ourPlan: "24 horas",
      competitor1: "30 dias",
      competitor2: "60 dias"
    },
    {
      feature: "Cobertura Nacional",
      ourPlan: "✓ Completa",
      competitor1: "✖ Parcial",
      competitor2: "✖ Apenas capital"
    },
    {
      feature: "Atendimento 24/7",
      ourPlan: "✓ Incluso",
      competitor1: "✖ Adicional",
      competitor2: "✖ Não disponível"
    },
    {
      feature: "App Mobile",
      ourPlan: "✓ Gratuito",
      competitor1: "✖ Pago",
      competitor2: "✖ Não disponível"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Diferenciais que Fazem a Diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia, cobertura e atendimento humano em um plano pensado para você
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(features).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {features[key as keyof typeof features].title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {features[activeTab as keyof typeof features].title}
              </h3>
              <p className="text-gray-600">
                {features[activeTab as keyof typeof features].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {features[activeTab as keyof typeof features].stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {features[activeTab as keyof typeof features].highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Comparativo de Planos
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Recursos</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">Nosso Plano</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Concorrente A</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Concorrente B</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-blue-600 font-semibold">{row.ourPlan}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.competitor1}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.competitor2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para experimentar a diferença?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 500 mil clientes que já escolheram o melhor plano de saúde do estado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Solicitar Proposta
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200">
              Baixar Comparativo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;