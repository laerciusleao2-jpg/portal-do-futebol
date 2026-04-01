import './Navigation.css'

export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => setCurrentPage('home')}
          >
            Início
          </button>
        </li>
        <li>
          <button 
            className={currentPage === 'resultados' ? 'active' : ''}
            onClick={() => setCurrentPage('resultados')}
          >
            Resultados
          </button>
        </li>
        <li>
          <button 
            className={currentPage === 'tabelas' ? 'active' : ''}
            onClick={() => setCurrentPage('tabelas')}
          >
            Tabelas
          </button>
        </li>
        <li>
          <button 
            className={currentPage === 'analises' ? 'active' : ''}
            onClick={() => setCurrentPage('analises')}
          >
            Análises
          </button>
        </li>
      </ul>
    </nav>
  )
}
