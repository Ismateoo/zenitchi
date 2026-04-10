import { Link } from 'react-router-dom'
import './breadcrumb.css'

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Navegación de ruta">
      <ol className="breadcrumb__lista">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb__item">
            {index < items.length - 1 ? (
              <>
                <Link to={item.href} className="breadcrumb__enlace">{item.label}</Link>
                <span className="breadcrumb__separador">•</span>
              </>
            ) : (
              <span className="breadcrumb__actual">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
