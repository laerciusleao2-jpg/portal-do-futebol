import './Analysis.css'

export default function Analysis() {
  const articles = [
    {
      id: 1,
      title: 'Análise Tática: O Domínio do Futebol Ofensivo',
      author: 'Carlos Silva',
      date: '01/04/2026',
      category: 'Tática',
      excerpt: 'Entenda como os grandes times europeus estão revolucionando a forma de atacar no futebol moderno.',
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'Jogadores em Destaque: Os Revelações da Temporada',
      author: 'Marina Santos',
      date: '31/03/2026',
      category: 'Jogadores',
      excerpt: 'Conheça os novos talentos que estão impressionando os maiores campeonatos do mundo.',
      readTime: '6 min'
    },
    {
      id: 3,
      title: 'Mercado de Transferências: Tendências e Previsões',
      author: 'Roberto Costa',
      date: '30/03/2026',
      category: 'Mercado',
      excerpt: 'Análise das movimentações no mercado de transferências e o que esperar nos próximos meses.',
      readTime: '10 min'
    },
    {
      id: 4,
      title: 'Estatísticas Revelam: Qual é o Melhor Time do Mundo?',
      author: 'Ana Paula',
      date: '29/03/2026',
      category: 'Estatísticas',
      excerpt: 'Uma análise profunda baseada em dados de desempenho, posse de bola e eficiência ofensiva.',
      readTime: '7 min'
    },
    {
      id: 5,
      title: 'Seleções em Foco: Preparação para as Eliminatórias',
      author: 'João Oliveira',
      date: '28/03/2026',
      category: 'Seleções',
      excerpt: 'Como as principais seleções se preparam para os próximos desafios internacionais.',
      readTime: '9 min'
    },
    {
      id: 6,
      title: 'Tecnologia no Futebol: VAR e Inovações Recentes',
      author: 'Pedro Alves',
      date: '27/03/2026',
      category: 'Tecnologia',
      excerpt: 'Conheça as tecnologias que estão transformando a forma como o futebol é jogado e arbitrado.',
      readTime: '5 min'
    }
  ]

  return (
    <section className="analysis-section">
      <div className="section-header">
        <h2>📝 Análises e Artigos</h2>
        <p className="subtitle">Leitura profunda sobre o futebol mundial</p>
      </div>

      <div className="articles-grid">
        {articles.map(article => (
          <article key={article.id} className="analysis-card">
            <div className="article-header">
              <span className="category-badge">{article.category}</span>
              <span className="read-time">⏱️ {article.readTime}</span>
            </div>
            <h3>{article.title}</h3>
            <p className="excerpt">{article.excerpt}</p>
            <div className="article-footer">
              <div className="author-info">
                <span className="author">Por {article.author}</span>
                <span className="date">{article.date}</span>
              </div>
              <button className="read-btn">Ler Artigo →</button>
            </div>
          </article>
        ))}
      </div>

      <div className="featured-section">
        <h3>🌟 Artigo em Destaque</h3>
        <div className="featured-article">
          <div className="featured-content">
            <h4>O Futuro do Futebol: Inteligência Artificial e Análise de Dados</h4>
            <p>Como a IA está revolucionando o treinamento, a análise de desempenho e a descoberta de talentos no futebol profissional.</p>
            <button className="featured-btn">Explorar Série Completa →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
