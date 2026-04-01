import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Bem-vindo ao Portal de Futebol</h2>
        <p>Acompanhe em tempo real os melhores momentos do futebol mundial</p>
        <div className="hero-highlights">
          <div className="highlight">
            <span className="number">500+</span>
            <span className="label">Notícias Diárias</span>
          </div>
          <div className="highlight">
            <span className="number">50+</span>
            <span className="label">Campeonatos</span>
          </div>
          <div className="highlight">
            <span className="number">1000+</span>
            <span className="label">Jogadores Analisados</span>
          </div>
        </div>
      </div>
    </section>
  )
}
