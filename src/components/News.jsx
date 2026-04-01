import './News.css'

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Campeonato Brasileiro: Líder vence com goleada',
      excerpt: 'Time da casa domina o adversário em partida emocionante no estádio lotado.',
      date: '01 de Abril, 2026',
      category: 'Campeonato Brasileiro',
      image: '🏆'
    },
    {
      id: 2,
      title: 'Copa Libertadores: Surpresa nas quartas de final',
      excerpt: 'Equipe revelação elimina favorita em jogo dramático com pênaltis.',
      date: '31 de Março, 2026',
      category: 'Copa Libertadores',
      image: '🏅'
    },
    {
      id: 3,
      title: 'Seleção se prepara para próximas eliminatórias',
      excerpt: 'Técnico convoca 23 jogadores para amistosos internacionais.',
      date: '30 de Março, 2026',
      category: 'Seleção Brasileira',
      image: '🇧🇷'
    },
    {
      id: 4,
      title: 'Mercado de transferências: Craque assina com gigante europeu',
      excerpt: 'Jogador brasileiro se torna a contratação mais cara do clube.',
      date: '29 de Março, 2026',
      category: 'Mercado',
      image: '💰'
    }
  ]

  return (
    <section className="news-section">
      <div className="section-header">
        <h2>📰 Últimas Notícias</h2>
        <a href="#" className="see-all">Ver Todas →</a>
      </div>
      <div className="news-grid">
        {newsItems.map(item => (
          <article key={item.id} className="news-card">
            <div className="news-image">{item.image}</div>
            <div className="news-content">
              <span className="category-badge">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <span className="news-date">{item.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
