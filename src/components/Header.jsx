import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>⚽ FUTEBOL TOTAL</h1>
          <p>Tudo sobre o esporte mais popular do mundo</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar times, jogadores, notícias..." />
          <button>🔍</button>
        </div>
      </div>
    </header>
  )
}
