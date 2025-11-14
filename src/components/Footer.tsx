import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">
                MelhorPlano
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O melhor plano de saúde do estado, oferecendo cobertura completa,
              rede ampla e atendimento humanizado para você e sua família.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Planos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Individual</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Familiar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Empresarial</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Aposentado</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Estudantil</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rede Credenciada</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Telemedicina</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">App Mobile</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Atendimento 24h</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Saúde Bem-estar</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contigo@melhorplano.saude</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span>Mais de 50 unidades em todo o estado</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Atendimento</h4>
              <p className="text-gray-300 text-sm">
                24 horas por dia<br />
                7 dias por semana<br />
                Incluindo feriados
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MelhorPlano Saúde. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LGPD
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                ANS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer