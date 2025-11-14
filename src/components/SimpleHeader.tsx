import { useState } from 'react'

const SimpleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                MelhorPlano
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Benefícios
            </a>
            <a href="#planos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Planos
            </a>
            <a href="#rede" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Rede Credenciada
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:08001234567"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              📞 0800 123 4567
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Falar com Especialista
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-3">
              <a
                href="#beneficios"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a
                href="#planos"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a
                href="#rede"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Rede Credenciada
              </a>
              <a
                href="#contato"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:08001234567"
                  className="flex items-center gap-2 px-3 py-2 text-blue-600 font-semibold"
                >
                  📞 0800 123 4567
                </a>
                <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Falar com Especialista
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default SimpleHeader