import { Link } from 'react-router-dom'
import vetPortImg from '../assets/vet-port.png'
import garage89Img from '../assets/garage89.png'
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Vet Port',
      category: 'Veterinária & Web Design',
      image: vetPortImg,
      isRealImage: true,
      description: 'Site completo para veterinária que atende a domicílio com design moderno e intuitivo.',
      tags: ['Veterinária', 'Web Design', 'React'],
      color: '#059669',
      link: 'https://vet-port.vercel.app/'
    },
    {
      id: 2,
      title: 'GARAGE89',
      category: 'Estética Automotiva & Web Design',
      image: garage89Img,
      isRealImage: true,
      description: 'Site profissional para estética automotiva com foco em serviços premium e agendamento online.',
      tags: ['Automotiva', 'Web Design', 'React'],
      color: '#dc2626',
      link: 'https://garage-89.vercel.app/'
    },
    {
      id: 3,
      title: 'TechFlow',
      category: 'Web Development',
      image: '💼',
      isRealImage: false,
      description: 'Plataforma SaaS para gestão de projetos com design moderno.',
      tags: ['React', 'SaaS', 'Dashboard'],
      color: '#3d5af1'
    },
    {
      id: 4,
      title: 'Studio Zen',
      category: 'Branding',
      image: '🧘',
      isRealImage: false,
      description: 'Marca e materiais visuais para estúdio de yoga e bem-estar.',
      tags: ['Logo', 'Identidade', 'Print'],
      color: '#7c3aed'
    },
    {
      id: 5,
      title: 'Fresh Market',
      category: 'Web Design & Development',
      image: '🥬',
      isRealImage: false,
      description: 'Marketplace online para produtos orgânicos e naturais.',
      tags: ['E-commerce', 'Mobile', 'SEO'],
      color: '#059669'
    },
    {
      id: 6,
      title: 'Arquiteta Digital',
      category: 'Portfolio Website',
      image: '🏛️',
      isRealImage: false,
      description: 'Portfolio interativo para escritório de arquitetura moderna.',
      tags: ['Portfolio', '3D', 'Animation'],
      color: '#d4af37'
    },
    {
      id: 7,
      title: 'FitLife App',
      category: 'UI/UX Design',
      image: '💪',
      isRealImage: false,
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
                <div 
                  className="project-image" 
                  style={{ 
                    background: project.isRealImage 
                      ? 'transparent' 
                      : `linear-gradient(135deg, ${project.color}22, ${project.color}44)` 
                  }}
                >
                  {project.isRealImage ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-real-image"
                    />
                  ) : (
                    <span className="project-emoji">{project.image}</span>
                  )}
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
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Ver projeto ao vivo
                    </a>
                  ) : (
                    <button className="btn btn-outline btn-sm">Ver projeto</button>
                  )}
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