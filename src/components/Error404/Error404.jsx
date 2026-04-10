import { Link } from 'react-router-dom'
import './error404.css'

export default function Error404() {
  return (
    <div className="error404">
      <p className="error404__label">404</p>
      <h1 className="error404__titulo">Página no encontrada</h1>
      <p className="error404__texto">La ruta que buscás no existe o fue movida.</p>
      <Link to="/" className="error404__boton">Volver al inicio</Link>
    </div>
  )
}
