# ⚽ Portal de Futebol - Tudo Sobre

Um portal completo e moderno dedicado ao futebol, com notícias, resultados, tabelas de classificação e análises profundas sobre o esporte.

## 🌟 Características

### Funcionalidades Principais

- **📰 Notícias em Tempo Real**: Últimas notícias de campeonatos brasileiros e internacionais
- **⚽ Resultados**: Placar de partidas com informações detalhadas
- **📊 Tabelas**: Classificação de campeonatos (Brasileirão, Libertadores, La Liga)
- **📝 Análises**: Artigos profundos sobre tática, mercado e estatísticas
- **🎨 Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **⚡ Performance**: Site otimizado e rápido

### Campeonatos Cobertos

- Campeonato Brasileiro
- Copa Libertadores
- Premier League
- La Liga
- Seleção Brasileira

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript moderno
- **Vite**: Build tool rápido e eficiente
- **CSS3**: Estilos responsivos e animações
- **JavaScript ES6+**: Código moderno e limpo

## 📁 Estrutura do Projeto

```
futebol-portal/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho com logo e busca
│   │   ├── Navigation.jsx      # Menu de navegação
│   │   ├── Hero.jsx            # Seção hero com destaques
│   │   ├── News.jsx            # Seção de notícias
│   │   ├── Results.jsx         # Resultados de partidas
│   │   ├── Tables.jsx          # Tabelas de classificação
│   │   ├── Analysis.jsx        # Análises e artigos
│   │   ├── Footer.jsx          # Rodapé
│   │   └── [componente].css    # Estilos de cada componente
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos globais
│   └── main.jsx                # Ponto de entrada
├── dist/                       # Build de produção
├── public/                     # Arquivos estáticos
├── index.html                  # HTML principal
├── package.json                # Dependências
└── vite.config.js             # Configuração do Vite
```

## 🚀 Como Usar

### Instalação

```bash
cd futebol-portal
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173/`

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

### Preview de Produção

```bash
npm run preview
```

## 📊 Componentes

### Header
- Logo do portal
- Barra de busca
- Design sticky no topo

### Navigation
- Menu de navegação com 4 seções
- Indicador de página ativa
- Responsivo em mobile

### Hero
- Seção de boas-vindas
- Estatísticas destacadas
- Design atraente com gradiente

### News
- Grid de notícias
- Categorias de conteúdo
- Cards interativos

### Results
- Lista de resultados recentes
- Informações de estádio e horário
- Suporte a múltiplas competições

### Tables
- Tabelas de classificação
- Seletor de ligas
- Dados completos (jogos, vitórias, empates, derrotas, pontos)

### Analysis
- Artigos profundos
- Categorias temáticas
- Tempo de leitura estimado
- Seção de artigo em destaque

### Footer
- Links úteis
- Redes sociais
- Informações legais

## 🎨 Design

### Paleta de Cores

- **Verde Principal**: `#1a472a` - Cor primária do futebol
- **Verde Secundário**: `#2d5a3d` - Variação mais clara
- **Amarelo Destaque**: `#ffc107` - Cor de chamada
- **Cinza Neutro**: `#f8f9fa` - Fundo

### Tipografia

- Font Family: System fonts (Apple System Font, Segoe UI, Roboto)
- Responsive: Ajusta tamanho em diferentes telas

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: Até 768px

## ⚙️ Configuração

### Vite Config

```javascript
export default {
  plugins: [react()],
}
```

### Package.json Scripts

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
- `npm run lint` - Verificação de código

## 🔧 Customização

### Adicionar Novas Notícias

Edite o arquivo `src/components/News.jsx` e adicione novos itens ao array `newsItems`.

### Modificar Tabelas

Edite `src/components/Tables.jsx` para adicionar novas ligas ou atualizar dados.

### Alterar Cores

Modifique as variáveis CSS em `src/App.css`:

```css
:root {
  --primary-color: #1a472a;
  --accent-color: #ffc107;
  /* ... */
}
```

## 📈 Performance

- **Tamanho do Build**: ~1.15 kB (HTML) + 14.26 kB (CSS) + 204.58 kB (JS)
- **Gzip**: ~0.55 kB + 3.47 kB + 63.63 kB
- **Tempo de Build**: ~144ms
- **Otimizações**: Code splitting, minificação, compressão

## 🌐 Hospedagem

O site pode ser hospedado em:

- **Vercel**: Deploy automático do repositório Git
- **Netlify**: Suporte a builds e deploy contínuo
- **GitHub Pages**: Hospedagem gratuita
- **AWS S3 + CloudFront**: Solução enterprise
- **Qualquer servidor web**: Basta servir arquivos de `dist/`

## 📝 Licença

Este projeto é de uso livre. Sinta-se à vontade para modificar e usar como desejar.

## 👨‍💻 Desenvolvimento

### Estrutura de Componentes

Cada componente segue o padrão:

```jsx
export default function ComponentName() {
  return (
    <section className="component-section">
      {/* Conteúdo */}
    </section>
  )
}
```

### Estilos

Cada componente tem seu próprio arquivo CSS com:

- Estilos base
- Estados (hover, active)
- Responsividade (media queries)

## 🐛 Troubleshooting

### Porta 5173 já em uso

```bash
npm run dev -- --port 3000
```

### Problemas de build

```bash
rm -rf node_modules dist
npm install
npm run build
```

## 📞 Suporte

Para dúvidas ou sugestões sobre o portal, entre em contato.

---

**Desenvolvido com ❤️ para os apaixonados por futebol**
