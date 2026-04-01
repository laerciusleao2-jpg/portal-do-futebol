import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre</h4>
          <ul>
            <li><a href="#">Sobre o Portal</a></li>
            <li><a href="#">Nossa Missão</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Conteúdo</h4>
          <ul>
            <li><a href="#">Notícias</a></li>
            <li><a href="#">Resultados</a></li>
            <li><a href="#">Tabelas</a></li>
            <li><a href="#">Análises</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Campeonatos</h4>
          <ul>
            <li><a href="#">Brasileirão</a></li>
            <li><a href="#">Libertadores</a></li>
            <li><a href="#">Premier League</a></li>
            <li><a href="#">La Liga</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Siga-nos</h4>
          <div className="social-links">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Futebol Total - Todos os direitos reservados</p>
        <div className="footer-links">
          <a href="#">Política de Privacidade</a>
          <span>•</span>
          <a href="#">Termos de Uso</a>
          <span>•</span>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
