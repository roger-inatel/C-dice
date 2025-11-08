import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Café Aroma',
      category: 'Branding & Web Design',
      image: '☕',
      description: 'Identidade visual completa e e-commerce para cafeteria premium.',
      tags: ['Branding', 'E-commerce', 'UI/UX'],
      color: '#8B4513'
    },
    {
      id: 2,
      title: 'TechFlow',
      category: 'Web Development',
      image: '💼',
      description: 'Plataforma SaaS para gestão de projetos com design moderno.',
      tags: ['React', 'SaaS', 'Dashboard'],
      color: '#3d5af1'
    },
    {
      id: 3,
      title: 'Studio Zen',
      category: 'Branding',
      image: '🧘',
      description: 'Marca e materiais visuais para estúdio de yoga e bem-estar.',
      tags: ['Logo', 'Identidade', 'Print'],
      color: '#7c3aed'
    },
    {
      id: 4,
      title: 'Fresh Market',
      category: 'Web Design & Development',
      image: '🥬',
      description: 'Marketplace online para produtos orgânicos e naturais.',
      tags: ['E-commerce', 'Mobile', 'SEO'],
      color: '#059669'
    },
    {
      id: 5,
      title: 'Arquiteta Digital',
      category: 'Portfolio Website',
      image: '🏛️',
      description: 'Portfolio interativo para escritório de arquitetura moderna.',
      tags: ['Portfolio', '3D', 'Animation'],
      color: '#d4af37'
    },
    {
      id: 6,
      title: 'FitLife App',
      category: 'UI/UX Design',
      image: '💪',
      description: 'Interface de aplicativo para acompanhamento fitness.',
      tags: ['Mobile App', 'UI/UX', 'Health'],
      color: '#dc2626'
    }
  ]

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <span className="section-label">Portfólio</span>
          <h1>Projetos que transformam marcas</h1>
          <p className="lead">
            Conheça alguns dos projetos que desenvolvemos com paixão e dedicação, 
            ajudando nossos clientes a alcançar seus objetivos.
          </p>
        </div>
      </section>

      <section className="portfolio-grid section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}>
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-overlay">
                  <button className="btn btn-outline btn-sm">Ver projeto</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Seu projeto pode ser o próximo</h2>
            <p>Vamos criar algo extraordinário juntos.</p>
            <Link to="/contato" className="btn btn-primary">
              Iniciar um projeto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio