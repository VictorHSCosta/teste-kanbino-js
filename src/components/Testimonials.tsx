import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      city: "São Paulo",
      avatar: "MS",
      rating: 5,
      content: "Há 10 anos sou cliente e nunca me arrependi. O atendimento é excelente, a rede de hospitais é ampla e a equipe sempre pronta para ajudar. Recomendo de olhos fechados!",
      highlight: true
    },
    {
      name: "João Santos",
      role: "Engenheiro",
      city: "Rio de Janeiro",
      avatar: "JS",
      rating: 5,
      content: "Precisei de cirurgia de emergência e fui atendido imediatamente. Todo o processo desde a internação até a alta foi incrível. O melhor plano que já tive.",
      highlight: false
    },
    {
      name: "Ana Costa",
      role: "Professora",
      city: "Belo Horizonte",
      avatar: "AC",
      rating: 5,
      content: "O app deles é fantástico! Consigo marcar consultas, ver resultados de exames e até telemedicina. Minha família toda é cliente e amamos.",
      highlight: false
    },
    {
      name: "Carlos Mendes",
      role: "Advogado",
      city: "Brasília",
      avatar: "CM",
      rating: 5,
      content: "Preço justo e atendimento de primeira. Tive um problema sério de saúde e fui tratado com máxima atenção e cuidado. Vale cada centavo investido.",
      highlight: false
    },
    {
      name: "Fernanda Lima",
      role: "Designer",
      city: "Curitiba",
      avatar: "FL",
      rating: 5,
      content: "O plano familiar é excelente! Meus filhos têm acesso aos melhores pediatras e a cobertura de vacinação é completa. A segurança de saber que estamos protegidos não tem preço.",
      highlight: false
    },
    {
      name: "Roberto Alves",
      role: "Médico",
      city: "Porto Alegre",
      avatar: "RA",
      rating: 5,
      content: "Como profissional da saúde, reconheço a qualidade do atendimento. A equipe é competente e preocupada genuinamente com o bem-estar dos pacientes.",
      highlight: false
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500.000 famílias confiam em nosso plano de saúde para cuidar do que mais importa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                testimonial.highlight
                  ? 'ring-2 ring-blue-500 ring-offset-2 transform hover:-translate-y-1'
                  : 'hover:transform hover:-translate-y-1'
              }`}
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <div className="flex items-start mb-6">
                <Quote className="h-8 w-8 text-blue-200 flex-shrink-0 mr-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur">
                <Star className="h-12 w-12 text-yellow-300 fill-current" />
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Junte-se aos Milhares de Clientes Satisfeitos
            </h3>

            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Descubra por que somos considerados o melhor plano de saúde do estado.
              Solicite uma proposta sem compromisso e veja todos os benefícios que oferecemos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <span>4.9</span>
                <div className="flex">
                  {renderStars(5)}
                </div>
              </div>
              <span className="text-lg opacity-75">em mais de 10.000 avaliações</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-2">24h</div>
            <div className="text-gray-600">Suporte 24/7</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-orange-600 mb-2">500K+</div>
            <div className="text-gray-600">Vidas Protegidas</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials