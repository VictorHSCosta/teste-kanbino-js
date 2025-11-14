# Plano de Saúde - Landing Page

Uma landing page profissional e moderna para um plano de saúde, construída com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

### Componentes Implementados

1. **HeroSection** (`src/components/HeroSection.tsx`)
   - Headline impactante com estatísticas
   - Botões de call-to-action (CTA)
   - Design responsivo com gradientes profissionais
   - Elementos visuais atrativos para capturar atenção

2. **BenefitsSection** (`src/components/BenefitsSection.tsx`)
   - Grid de benefícios em cards interativos
   - Ícones representativos para cada vantagem
   - Seção destacada de call-to-action
   - Hover effects e animações suaves

3. **FeaturesSection** (`src/components/FeaturesSection.tsx`)
   - Tabs interativas para diferentes categorias
   - Comparativo visual com concorrentes
   - Estatísticas dinâmicas
   - Tabela comparativa de recursos

4. **TestimonialsSection** (`src/components/TestimonialsSection.tsx`)
   - Carrossel de depoimentos de clientes
   - Sistema de avaliação por estrelas
   - Indicadores de confiança e estatísticas
   - Avatares e informações dos clientes

5. **CTASection** (`src/components/CTASection.tsx`)
   - Formulário de contato funcional
   - Múltiplos canais de comunicação
   - Botões de ação rápida
   - Informações de emergência

6. **Footer** (`src/components/Footer.tsx`)
   - Links organizados por categorias
   - Redes sociais integradas
   - Informações de contato
   - Certificações e selos de qualidade
   - Links legais e políticas

## 🎨 Design e Estilo

### Cores
- **Primária**: Blue 600 (#3B82F6) - Confiabilidade e profissionalismo
- **Secundária**: Indigo 600 (#4F46E5) - Sofisticação
- **Acento**: Green 600 (#059669) - Saúde e aprovação
- **Neutras**: Gradientes de cinza para harmonia visual

### Tipografia
- Fonte principal: Inter (Google Fonts)
- Hierarquia clara e legibilidade otimizada
- Tamanhos responsivos para diferentes dispositivos

### Responsividade
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Layout adaptável para todos os dispositivos

## 🛠️ Tecnologias

- **React 19.2.0** - Biblioteca frontend
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e development server
- **Tailwind CSS 4.1.17** - Framework CSS utility-first
- **ESLint** - Linting e qualidade de código

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clonar o repositório
git clone [URL-DO-REPOSITÓRIO]
cd teste-kanbino-js

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Linting do código
npm run lint
```

### Estrutura de Arquivos
```
src/
├── components/           # Componentes React
│   ├── HeroSection.tsx
│   ├── BenefitsSection.tsx
│   ├── FeaturesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── App.tsx              # Componente principal
├── App.css              # Estilos específicos do app
├── index.css            # Estilos globais e Tailwind
└── main.tsx             # Ponto de entrada da aplicação
```

## ✨ Características Técnicas

### Performance
- Lazy loading de componentes
- Otimização de imagens
- Código split automático com Vite
- Build otimizado para produção

### Acessibilidade
- ARIA labels adequados
- Navegação por teclado
- Contraste otimizado
- Suporte a leitores de tela

### SEO-Friendly
- Semântica HTML5 correta
- Meta tags configuráveis
- URL structure amigável
- Open Graph tags prontas

## 🎯 Objetivos de Negócio

A landing page foi projetada para:

1. **Conversão**: Capturar leads através do formulário de contato
2. **Confiança**: Construir credibilidade com depoimentos e certificações
3. **Educação**: Informar sobre benefícios e diferenciais do plano
4. **Comparação**: Mostrar superioridade em relação à concorrência
5. **Contato**: Facilitar múltiplos canais de comunicação

## 🔄 Personalização

### Cores da Marca
Altere as cores principais modificando as classes Tailwind nos componentes:
- `bg-blue-600` → `bg-[sua-cor]`
- `text-blue-600` → `text-[sua-cor]`

### Conteúdo
Todos os textos estão facilmente customizáveis nos arquivos de componentes:
- Títulos e subtítulos
- Descrições de benefícios
- Textos dos depoimentos
- Informações de contato

### Imagens e Ícones
Substitua os ícones SVG por imagens da marca quando necessário.

## 🚀 Deploy

A aplicação está pronta para deploy em:
- Vercel (recomendado)
- Netlify
- GitHub Pages
- Qualquer hosting estático

## 📱 Navegadores Suportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para melhorar o acesso à saúde no estado**
