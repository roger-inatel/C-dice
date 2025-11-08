// components/ServiceCard.jsx
import './ServiceCard.css'

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index} className="feature">
            <span className="feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="service-link">
        <span>Saiba mais</span>
        <span className="arrow">→</span>
      </div>
    </div>
  )
}

export default ServiceCard