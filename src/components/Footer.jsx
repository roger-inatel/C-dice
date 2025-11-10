// components/Footer.jsx
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">⟨/⟩</span>
              <span className="logo-text">CÓDICE</span>
            </div>
            <p className="footer-tagline">
              Registrando o legado das marcas através de design e tecnologia.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navegação</h4>
              <Link to="/">Início</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/servicos">Serviços</Link>
              <Link to="/portfolio">Portfólio</Link>
              <Link to="/contato">Contato</Link>
            </div>

            <div className="footer-column">
              <h4>Contato</h4>
              <a href="mailto:contato@codice.studio">contato@codice.studio</a>
              <a href="tel:+5535999999999">+55 (35) 99999-9999</a>
              <span>Pouso Alegre, MG</span>
            </div>

            <div className="footer-column">
              <h4>Redes Sociais</h4>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Códice. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span className="heart">♥</span> e tecnologia</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer