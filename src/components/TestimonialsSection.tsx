import React, { useState } from 'react';

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      age: 45,
      city: "São Paulo",
      plan: "Plano Família Premium",
      rating: 5,
      text: "Há 10 anos com este plano e nunca me arrependi. O atendimento é impecável, a rede de hospitais é vasta e o atendimento telefônico resolve tudo rapidamente. Recomendo de olhos fechados!",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "João Santos",
      age: 38,
      city: "Rio de Janeiro",
      plan: "Plano Individual Standard",
      rating: 5,
      text: "Mudei de outro plano para cá e a diferença é enorme. O app funciona perfeitamente, consigo marcar consultas facilmente e a cobertura é realmente completa. Melhor decisão que tomei!",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Ana Oliveira",
      age: 52,
      city: "Belo Horizonte",
      plan: "Plano Sênior Plus",
      rating: 5,
      text: "Como idosa, preciso de cuidado constante. Este plano oferece tudo: médicos excelentes, exames sem burocracia e um programa de bem-estar que mudou minha qualidade de vida. Gratidão sempre!",
      avatar: "👵"
    },
    {
      id: 4,
      name: "Carlos Mendes",
      age: 35,
      city: "Salvador",
      plan: "Plano Jovem",
      rating: 5,
      text: "Precisei de cirurgia de emergência e fui atendido imediatamente. Todo o processo foi tranquilo, desde a autorização até a alta. Sempre pensei que plano de saúde era complicado, mas com eles é diferente.",
      avatar: "👨‍⚕️"
    },
    {
      id: 5,
      name: "Fernanda Lima",
      age: 28,
      city: "Recife",
      plan: "Plano Casal",
      rating: 5,
      text: "Eu e meu marido adoramos. O preço é justo para a qualidade oferecida. Tivemos nosso primeiro bebê e todo o pré-natal, parto e acompanhamento foram perfeitos. Superou todas as expectativas!",
      avatar: "👩‍🍼"
    },
    {
      id: 6,
      name: "Roberto Costa",
      age: 62,
      city: "Porto Alegre",
      plan: "Plano Família Completo",
      rating: 5,
      text: "Toda minha família usa este plano. Meus netos, meus filhos e eu. Já passamos por várias situações médicas e sempre fimos bem atendidos. É paz de espírito saber que estamos protegidos.",
      avatar: "👴"
    }
  ];

  const stats = [
    { number: "4.9", label: "Avaliação Média", sublabel: "De 5 estrelas" },
    { number: "98%", label: "Clientes Satisfeitos", sublabel: "Renovariam o plano" },
    { number: "15min", label: "Tempo Médio", sublabel "De atendimento telefônico" },
    { number: "24/7", label: "Disponibilidade", sublabel: "Todos os dias" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Histórias de Confiança e Satisfação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a experiência de milhares de clientes que escolheram cuidar da saúde com a gente
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="text-6xl text-center md:text-left">
              {testimonials[activeTestimonial].avatar}
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}, {testimonials[activeTestimonial].age} anos
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].city} • {testimonials[activeTestimonial].plan}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setActiveTestimonial(testimonial.id - 1)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div className="flex">{renderStars(testimonial.rating)}</div>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}, {testimonial.age}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.city} • {testimonial.plan}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              Por que Confiamos em Nós?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold">Certificação ANS</h4>
                <p className="text-blue-100 text-sm">
                  Totalmente regulamentado e aprovado pela Agência Nacional de Saúde
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold">15 Anos de Mercado</h4>
                <p className="text-blue-100 text-sm">
                  Experiência consolidada e milhares de vidas transformadas
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold">Reconhecimento</h4>
                <p className="text-blue-100 text-sm">
                  Premiado como melhor plano de saúde do estado por 5 anos consecutivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;