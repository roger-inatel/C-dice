// components/HeroSection.jsx
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Estúdio Digital Premium</span>
          </div>
          
          <h1 className="hero-title">
            Registramos o legado 
            <span className="title-highlight">_das marcas</span>
          </h1>
          
          <p className="hero-description">
            Transformamos visões em realidade digital através de design estratégico, 
            branding excepcional e desenvolvimento web de alta performance. 
            Cada projeto é uma obra única, criada para destacar sua marca no mercado.
          </p>
          
          <div className="hero-actions">
            <Link to="/contato" className="btn btn-primary">
              Iniciar projeto
            </Link>
            <Link to="/portfolio" className="btn btn-outline">
              Ver portfólio
            </Link>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Design Premium</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Desenvolvimento Ágil</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Suporte Dedicado</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection