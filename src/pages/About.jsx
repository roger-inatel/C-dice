// pages/About.jsx
import { Link } from 'react-router-dom'
import './About.css'

function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Excelência',
      description: 'Comprometidos com a máxima qualidade em cada pixel e linha de código.'
    },
    {
      icon: '💡',
      title: 'Inovação',
      description: 'Sempre explorando novas tecnologias e tendências de design para criar soluções únicas.'
    },
    {
      icon: '🤝',
      title: 'Parceria',
      description: 'Trabalhamos lado a lado com nossos clientes, transformando visões em realidade.'
    },
    {
      icon: '⚡',
      title: 'Agilidade',
      description: 'Processos eficientes que entregam resultados extraordinários em tempo recorde.'
    }
  ]

  const skills = [
    { name: 'Design UI/UX', level: 95 },
    { name: 'Desenvolvimento Frontend', level: 98 },
    { name: 'Branding', level: 90 },
    { name: 'Estratégia Digital', level: 92 }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="section-label">Sobre a Códice</span>
            <h1>Transformando marcas em legados digitais</h1>
            <p className="lead">
              Somos um estúdio digital especializado em criar experiências visuais 
              e digitais memoráveis que elevam marcas e conectam pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="about-story section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Nossa História</h2>
              <p>
                A Códice nasceu da paixão por design e tecnologia. Começamos com 
                uma visão clara: criar soluções digitais que não apenas impressionam 
                visualmente, mas que geram resultados tangíveis para os negócios.
              </p>
              <p>
                Ao longo dos anos, desenvolvemos uma metodologia única que combina 
                pesquisa estratégica, design centrado no usuário e desenvolvimento 
                técnico de excelência. Cada projeto é uma oportunidade de superar 
                expectativas e criar algo verdadeiramente extraordinário.
              </p>
              <p>
                Hoje, trabalhamos com clientes de diversos segmentos, desde startups 
                inovadoras até empresas estabelecidas que buscam renovar sua presença 
                digital. Nosso compromisso permanece o mesmo: registrar o legado das 
                marcas através de design e tecnologia de ponta.
              </p>
            </div>
            <div className="story-visual">
              <div className="visual-box box-1">
                <div className="box-content">
                  <h3>2021</h3>
                  <p>Fundação da Códice</p>
                </div>
              </div>
              <div className="visual-box box-2">
                <div className="box-content">
                  <h3>50+</h3>
                  <p>Projetos concluídos</p>
                </div>
              </div>
              <div className="visual-box box-3">
                <div className="box-content">
                  <h3>100%</h3>
                  <p>Satisfação dos clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="about-values section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nossos Valores</span>
            <h2>O que nos move</h2>
            <p>
              Princípios que guiam cada decisão e cada projeto que desenvolvemos.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="about-skills section">
        <div className="container">
          <div className="skills-grid">
            <div className="skills-content">
              <h2>Expertise Técnica</h2>
              <p>
                Dominamos as ferramentas e tecnologias mais avançadas do mercado 
                para entregar soluções que combinam beleza estética com performance 
                excepcional.
              </p>
              <p>
                Nossa equipe está constantemente aprendendo e evoluindo, garantindo 
                que seus projetos utilizem as melhores práticas e tecnologias mais 
                recentes disponíveis.
              </p>
            </div>
            <div className="skills-bars">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Vamos criar algo incrível juntos?</h2>
            <p>
              Estamos prontos para transformar sua visão em realidade digital.
            </p>
            <div className="cta-buttons">
              <Link to="/contato" className="btn btn-primary">
                Entre em contato
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

export default About