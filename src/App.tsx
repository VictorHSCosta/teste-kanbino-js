import SimpleHeader from './components/SimpleHeader'
import HeroSection from './components/HeroSection'
import BenefitsGrid from './components/BenefitsGrid'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader />
      <main>
        <HeroSection />
        <BenefitsGrid />

        {/* Simplified Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Por Que Escolher Nosso Plano?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos o melhor cuidado de saúde com cobertura completa e atendimento humanizado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🏥 Rede Ampliada</h3>
                <p className="text-blue-700">Acesso a mais de 5.000 hospitais, clínicas e laboratórios em todo o estado.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-900 mb-3">⚡ Atendimento Rápido</h3>
                <p className="text-green-700">Aprovação em até 24 horas e atendimento 24/7 sem burocracia.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-900 mb-3">💰 Melhor Preço</h3>
                <p className="text-purple-700">Planos a partir de R$ 89,90 com o melhor custo-benefício do mercado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-xl text-gray-600">
                Mais de 500.000 famílias confiam em nosso plano de saúde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4">"O melhor plano que já tive! Atendimento excelente e rede ampla."</p>
                <div>
                  <div className="font-semibold">Maria Silva</div>
                  <div className="text-sm text-gray-600">Empresária, São Paulo</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4">"Precisei de cirurgia emergencial e fui atendido imediatamente. Incrível!"</p>
                <div>
                  <div className="font-semibold">João Santos</div>
                  <div className="text-sm text-gray-600">Engenheiro, Rio de Janeiro</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4">"O app deles é fantástico! Facilidade para marcar consultas e ver resultados."</p>
                <div>
                  <div className="font-semibold">Ana Costa</div>
                  <div className="text-sm text-gray-600">Professora, Belo Horizonte</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proteja Sua Saúde Hoje Mesmo
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato com nossos especialistas e descubra o plano ideal para você e sua família
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Falar com Especialista
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Simular Plano
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Satisfação</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Atendimento</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Anos</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">500K+</div>
                <div className="text-sm opacity-90">Clientes</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">MelhorPlano</span>
              </div>
              <p className="text-gray-300">
                O melhor plano de saúde do estado, oferecendo cobertura completa e atendimento humanizado.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-300">
                <div>📞 0800 123 4567</div>
                <div>✉️ contato@melhorplano.saude</div>
                <div>📍 Mais de 50 unidades em todo o estado</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links Úteis</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Planos</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Rede Credenciada</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">App Mobile</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 MelhorPlano Saúde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
