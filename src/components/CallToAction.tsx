import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Heart, Shield, Users } from 'lucide-react'

const CallToAction = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "0800 123 4567",
      action: "Ligar Agora",
      href: "tel:08001234567"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contigo@melhorplano.saude",
      action: "Enviar Mensagem",
      href: "mailto:contigo@melhorplano.saude"
    },
    {
      icon: MapPin,
      label: "Agências",
      value: "Mais de 50 unidades",
      action: "Encontrar Agência",
      href: "#agencias"
    },
    {
      icon: Clock,
      label: "Atendimento",
      value: "24h por dia, 7 dias por semana",
      action: "Fale Conosco",
      href: "#contato"
    }
  ]

  const benefits = [
    "Análise de perfil personalizada",
    "Sem compromisso ou custo",
    "Resposta em até 24 horas",
    "Desconto exclusivo na contratação"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Proteja sua saúde hoje mesmo
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comece a Cuidar da Sua Saúde com o Melhor Plano
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Entre em contato com nossa equipe de especialistas e descubra o plano ideal
              para você e sua família. Atendimento personalizado e sem burocracia.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                Falar com Especialista
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Heart className="h-5 w-5" />
                Simular Plano
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Fale Conosco Agora
              </h3>

              <form className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Plano
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Individual</option>
                    <option>Familiar</option>
                    <option>Empresarial</option>
                    <option>Aposentado/Pensionista</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Solicitar Contato
                </button>
              </form>

              <div className="text-center text-sm text-gray-600">
                <p>Seus dados estão seguros e não serão compartilhados.</p>
                <p className="mt-1">Resposta garantida em até 24 horas.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-center"
            >
              <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <info.icon className="h-6 w-6" />
              </div>
              <div className="text-sm text-gray-600 mb-1">{info.label}</div>
              <div className="font-semibold text-gray-900 mb-2">{info.value}</div>
              <div className="text-blue-600 font-medium group-hover:text-blue-700">
                {info.action}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="flex justify-center mb-6">
            <Users className="h-16 w-16 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Junte-se à Família Melhor Plano
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Mais de 500.000 pessoas já escolheram o melhor plano de saúde do estado.
            Cuide de quem você ama com a segurança e tranquilidade que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Contratar Agora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Download do App
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction