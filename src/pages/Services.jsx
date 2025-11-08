import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  const services = [
    {
      id: 'branding',
      icon: '🎨',
      title: 'Branding & Identidade Visual',
      description: 'Criamos marcas que deixam impressões duradouras e conectam emocionalmente com seu público.',
      features: [
        'Pesquisa e estratégia de marca',
        'Design de logotipo e símbolo',
        'Paleta de cores e tipografia',
        'Manual de identidade visual',
        'Aplicações em diversos materiais',
        'Guia de tom de voz'
      ],
      deliverables: ['Logotipo em diversos formatos', 'Manual da marca completo', 'Mockups de aplicação'],
      timeline: '3-4 semanas'
    },
    {
      id: 'web-design',
      icon: '💻',
      title: 'Design de Sites',
      description: 'Interfaces modernas que proporcionam experiências memoráveis e convertem visitantes em clientes.',
      features: [
        'Pesquisa de usuário e personas',
        'Arquitetura de informação',
        'Wireframes e protótipos',
        'Design UI responsivo',
        'Design system completo',
        'Testes de usabilidade'
      ],
      deliverables: ['Protótipos interativos', 'Design system', 'Especificações para desenvolvimento'],
      timeline: '4-6 semanas'
    },
    {
      id: 'development',
      icon: '⚡',
      title: 'Desenvolvimento Web',
      description: 'Sites rápidos, seguros e otimizados construídos com tecnologias modernas e boas práticas.',
      features: [
        'Desenvolvimento React',
        'Sites responsivos',
        'Performance otimizada',
        'SEO avançado',
        'Integração com APIs',
        'Deploy e hospedagem'
      ],
      deliverables: ['Site completo e funcional', 'Código otimizado', 'Documentação técnica'],
      timeline: '4-8 semanas'
    },
    {
      id: 'consulting',
      icon: '🎯',
      title: 'Consultoria Digital',
      description: 'Orientação estratégica para maximizar sua presença online e alcançar seus objetivos de negócio.',
      features: [
        'Auditoria de presença digital',
        'Estratégia de conteúdo',
        'Análise de concorrência',
        'Planejamento de UX',
        'Otimização de conversão',
        'Relatórios e métricas'
      ],
      deliverables: ['Relatório de auditoria', 'Plano estratégico', 'Roadmap de implementação'],
      timeline: '2-3 semanas'
    },
    {
      id: 'maintenance',
      icon: '🛠️',
      title: 'Manutenção e Suporte',
      description: 'Mantemos seu site sempre atualizado, seguro e funcionando perfeitamente.',
      features: [
        'Atualizações regulares',
        'Monitoramento de segurança',
        'Backup automático',
        'Suporte técnico prioritário',
        'Otimização contínua',
        'Relatórios mensais'
      ],
      deliverables: ['Site sempre atualizado', 'Suporte 24/7', 'Relatórios de performance'],
      timeline: 'Planos mensais'
    },
    {
      id: 'seo',
      icon: '🔍',
      title: 'SEO & Performance',
      description: 'Otimizamos seu site para aparecer no topo dos resultados de busca e carregar em alta velocidade.',
      features: [
        'Otimização on-page',
        'Pesquisa de palavras-chave',
        'Link building estratégico',
        'Otimização de velocidade',
        'Core Web Vitals',
        'Análise e relatórios'
      ],
      deliverables: ['Site otimizado para SEO', 'Relatório de keywords', 'Melhoria de performance'],
      timeline: '3-4 semanas + manutenção'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <span className="section-label">Nossos Serviços</span>
          <h1>Soluções completas para elevar sua marca</h1>
          <p className="lead">
            Do conceito à execução, oferecemos todos os serviços necessários para 
            criar uma presença digital marcante e profissional.
          </p>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          {services.map((service) => (
            <div key={service.id} className="service-detail">
              <div className="service-detail-header">
                <div className="service-detail-icon">{service.icon}</div>
                <div>
                  <h2>{service.title}</h2>
                  <p className="service-detail-description">{service.description}</p>
                </div>
              </div>
              
              <div className="service-detail-content">
                <div className="service-detail-section">
                  <h3>O que está incluído</h3>
                  <ul className="features-list">
                    {service.features.map((feature, i) => (
                      <li key={i}><span className="check">✓</span> {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-detail-sidebar">
                  <div className="sidebar-item">
                    <h4>Entregáveis</h4>
                    <ul>
                      {service.deliverables.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="sidebar-item">
                    <h4>Prazo</h4>
                    <p>{service.timeline}</p>
                  </div>
                  <Link to="/contato" className="btn btn-primary btn-full">
                    Solicitar orçamento
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Não encontrou o que procura?</h2>
            <p>Oferecemos soluções personalizadas para atender suas necessidades específicas.</p>
            <Link to="/contato" className="btn btn-outline">
              Entre em contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services