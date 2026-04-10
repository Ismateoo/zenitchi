import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__columna footer__columna--marca">
          <Link to="/" className="footer__logo">Zenit</Link>
          <p className="footer__descripcion">
            Creamos objetos que serán historia. Equipaje diseñado con una mirada única y funcionalidad imposible.
          </p>
          <div className="footer__redes">
            <a href="#" className="footer__red" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="footer__red" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__columna">
          <h4 className="footer__titulo">Empresa</h4>
          <ul className="footer__lista">
            <li><a href="#" className="footer__enlace">Nuestra misión</a></li>
            <li><a href="#" className="footer__enlace">Sucursales</a></li>
            <li><a href="#" className="footer__enlace">Trabajá con nosotros</a></li>
          </ul>
        </div>

        <div className="footer__columna">
          <h4 className="footer__titulo">Soporte</h4>
          <ul className="footer__lista">
            <li><a href="#" className="footer__enlace">Preguntas frecuentes</a></li>
            <li><a href="#" className="footer__enlace">Contacto</a></li>
            <li><a href="#" className="footer__enlace">Seguimiento de envío</a></li>
          </ul>
        </div>

        <div className="footer__columna">
          <h4 className="footer__titulo">Legal</h4>
          <ul className="footer__lista">
            <li><a href="#" className="footer__enlace">Términos y condiciones</a></li>
            <li><a href="#" className="footer__enlace">Política de privacidad</a></li>
            <li><a href="#" className="footer__enlace">Garantías por vida</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__base">
        <div className="footer__base-inner">
          <span className="footer__copyright">© 2026 Zenit. The Brand Centered Experience.</span>
          <span className="footer__tagline">Nueva Sede: Athos</span>
        </div>
      </div>
    </footer>
  )
}
