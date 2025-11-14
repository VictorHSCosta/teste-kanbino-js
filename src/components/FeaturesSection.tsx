import { CheckCircle, Star, Heart, Shield, Home, Ambulance } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Amplo Rol de Procedimentos",
      description: "Cobertura completa para consultas, exames, cirurgias e tratamentos especializados",
      items: [
        "Consultas clínicas e especializadas",
        "Exames laboratoriais e de imagem",
        "Cirurgias eletivas e de emergência",
        "Fisioterapia e reabilitação"
      ]
    },
    {
      icon: Star,
      title: "Equipe de Especialistas Renomada",
      description: "Acesso aos melhores médicos e especialistas do estado em todas as áreas",
      items: [
        "Médicos com mais de 10 anos de experiência",
        "Especialistas reconhecidos no mercado",
        "Equipe multidisciplinar completa",
        "Segunda opinião médica gratuita"
      ]
    },
    {
      icon: Heart,
      title: "Programas de Prevenção e Bem-estar",
      description: "Acompanhamento completo para manter sua saúde em dia",
      items: [
        "Check-up anual completo",
        "Programas de alimentação saudável",
        "Atendimento psicológico",
        "Aulas de ginástica e yoga"
      ]
    },
    {
      icon: Shield,
      title: "Segurança e Confiança",
      description: "Proteção completa para você e sua família quando mais precisar",
      items: [
        "Carência reduzida",
        "Cobertura nacional em viagens",
        "Atendimento 24h por dia",
        "Suporte internacional"
      ]
    },
    {
      icon: Home,
      title: "Atendimento Domiciliar",
      description: "Conveniência e cuidado no conforto da sua casa",
      items: [
        "Médico e enfermeiro em casa",
        "Exames laboratoriais domiciliares",
        "Fisioterapia no domicílio",
        "Assistência farmacêutica"
      ]
    },
    {
      icon: Ambulance,
      title: "Serviço de Emergência",
      description: "Rapidez e eficiência nas situações de emergência",
      items: [
        "Ambulâncias equipadas 24h",
        "Pronto-socorro próprio",
        "UTI móvel",
        "Transferência hospitalar"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Diferenciais Exclusivos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos o mais completo conjunto de benefícios para garantir sua tranquilidade e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 p-4 rounded-xl shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Plano Completo para Toda a Família
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Oferecemos descontos especiais para planos familiares e condições exclusivas para empresas.
                Cuide de quem você ama com o melhor plano de saúde do estado.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Até 20% de desconto para planos familiares</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Condições especiais para empresas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Sem taxa de adesão para novos clientes</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                Solicitar Proposta
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Anos no Mercado</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
                <div className="text-gray-600 text-sm">Clientes Satisfeitos</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Suporte Total</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">5★</div>
                <div className="text-gray-600 text-sm">Avaliação Média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection