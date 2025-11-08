// pages/Home.jsx
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import './Home.css'

function Home() {
  const services = [
    {
      icon: '🎨',
      title: 'Identidade Visual',
      description: 'Criação de marcas memoráveis que capturam a essência do seu negócio e conectam com seu público.',
      features: ['Logotipo', 'Paleta de cores', 'Tipografia', 'Manual de marca']
    },
    {
      icon: '💻',
      title: 'Design de Sites',
      description: 'Interfaces modernas e intuitivas que proporcionam experiências excepcionais aos seus usuários.',
      features: ['UI/UX Design', 'Prototipagem', 'Design responsivo', 'Design systems']
    },
    {
      icon: '⚡',
      title: 'Desenvolvimento Web',
      description: 'Sites rápidos, seguros e otimizados construídos com as tecnologias mais modernas do mercado.',
      features: ['React', 'Performance', 'SEO', 'Manutenção']
    }
  ]

  const stats = [
    { number: '50+', label: 'Projetos Entregues' },
    { number: '100%', label: 'Satisfação' },
    { number: '24/7', label: 'Suporte' },
    { number: '3+', label: 'Anos de Experiência' }
  ]

  return (
    <div className="home">
      <HeroSection />

      {/* Seção de Estatísticas */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content">
              <span className="section-label">Sobre a Códice</span>
              <h2>Transformando visões em realidade digital</h2>
              <p>
                Na Códice, acreditamos que cada marca tem uma história única para contar. 
                Combinamos design estratégico e tecnologia de ponta para criar experiências 
                digitais que não apenas impressionam, mas que geram resultados concretos.
              </p>
              <p>
                Nossa abordagem vai além do visual: criamos sistemas completos que 
                fortalecem a presença digital da sua marca e constroem conexões 
                duradouras com seu público.
              </p>
              <Link to="/sobre" className="btn btn-outline">
                Conheça nossa história
              </Link>
            </div>
            <div className="about-preview-visual">
              <div className="visual-card">
                <div className="visual-icon">⟨/⟩</div>
                <div className="visual-text">
                  <h3>Design + Código</h3>
                  <p>A perfeita harmonia entre estética e funcionalidade</p>
                </div>
              </div>
              <div className="visual-card">
                <div className="visual-icon">✦</div>
                <div className="visual-text">
                  <h3>Inovação</h3>
                  <p>Sempre à frente com as melhores tecnologias</p>
                </div>
              </div>
              <div className="visual-card">
                <div className="visual-icon">◈</div>
                <div className="visual-text">
                  <h3>Excelência</h3>
                  <p>Comprometidos com a qualidade em cada detalhe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nossos Serviços</span>
            <h2 className="section-title">Soluções completas para sua marca</h2>
            <p className="section-subtitle">
              Da concepção à execução, oferecemos tudo que você precisa para 
              estabelecer uma presença digital marcante e profissional.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/servicos" className="btn btn-primary">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Processo */}
      <section className="process-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nosso Processo</span>
            <h2 className="section-title">Como trabalhamos</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Descoberta</h3>
              <p>Entendemos profundamente seu negócio, objetivos e público-alvo.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Estratégia</h3>
              <p>Desenvolvemos um plano personalizado para alcançar seus objetivos.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Criação</h3>
              <p>Damos vida às ideias com design impecável e código de qualidade.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Lançamento</h3>
              <p>Implementamos com cuidado e oferecemos suporte contínuo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para registrar o legado da sua marca?</h2>
            <p>
              Vamos conversar sobre como podemos transformar sua visão em realidade digital.
            </p>
            <div className="cta-buttons">
              <Link to="/contato" className="btn btn-primary">
                Iniciar um projeto
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                Ver nosso trabalho
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home