import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // CORRIGIDO: Nomes devem corresponder ao template EmailJS
      const templateParams = {
        from_name: formData.name,      // ✅ Correto agora
        from_email: formData.email,    // ✅ Correto agora
        phone: formData.phone,         // ✅ Correto
        service: formData.service,     // ✅ Correto
        message: formData.message,     // ✅ Correto
      }

      const response = await emailjs.send(
        'service_rf5bn25',
        'template_4xzvy3c',
        templateParams,
        'T7z8UzEtfmwyM-kfw'
      )

      console.log('Email enviado com sucesso!', response.status, response.text)
      setSubmitStatus('success')
      
      // Reset form após 10 segundos
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
        setSubmitStatus(null)
      }, 10000)

    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 10000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Contato</span>
          <h1>Vamos criar algo incrível juntos</h1>
          <p className="lead">
            Entre em contato para discutir seu projeto. Estamos prontos para 
            transformar sua visão em realidade digital.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informações de contato</h2>
              <p>
                Escolha a melhor forma de entrar em contato conosco. 
                Respondemos todos os contatos em até 24 horas.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>codicestyle@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div>
                    <h4>Telefone</h4>
                    <p>+55 (35) 99894-1011</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Localização</h4>
                    <p>Pouso Alegre, MG - Brasil</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div>
                    <h4>Horário</h4>
                    <p>Seg - Sex: 9h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Siga-nos</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">LinkedIn</a>
                  <a href="#" className="social-icon">Instagram</a>
                  <a href="#" className="social-icon">GitHub</a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="form-message success-message">
                  <div className="message-icon-wrapper">
                    <div className="success-checkmark">
                      <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content">
                    <h3>Mensagem enviada com sucesso!</h3>
                    <p className="message-highlight">
                      Obrigado por entrar em contato, <strong>{formData.name}</strong>!
                    </p>
                    <p className="message-detail">
                      Recebemos sua mensagem e retornaremos em breve para o email <strong>{formData.email}</strong>.
                    </p>
                    <div className="message-footer">
                      <span className="footer-icon">✨</span>
                      <span>Aguarde nosso contato em até 24 horas</span>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error-message">
                  <div className="message-icon-wrapper">
                    <div className="error-icon">
                      <span className="error-x">✕</span>
                    </div>
                  </div>
                  <div className="message-content">
                    <h3>Ops! Algo deu errado</h3>
                    <p className="message-detail">
                      Não foi possível enviar sua mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email <strong>contato@codice.studio</strong>.
                    </p>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Serviço de interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="branding">Branding & Identidade Visual</option>
                  <option value="web-design">Design de Sites</option>
                  <option value="development">Desenvolvimento Web</option>
                  <option value="consulting">Consultoria Digital</option>
                  <option value="maintenance">Manutenção e Suporte</option>
                  <option value="seo">SEO & Performance</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Conte-nos sobre seu projeto..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact