import { useState } from 'react'
import './newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) {
      setEnviado(true)
    }
  }

  return (
    <section className="newsletter" id="somos-zenit">
      <div className="newsletter__inner">
        <div className="newsletter__contenido">
          <h2 className="newsletter__titulo">
            Sé parte de la<br />
            <span className="newsletter__titulo-acento">Comunidad Zenit.</span>
          </h2>
          <p className="newsletter__descripcion">
            Suscribite para recibir lanzamientos exclusivos, guías de viaje y beneficios curados solo para miembros.
          </p>
        </div>

        <div className="newsletter__formulario-wrap">
          {enviado ? (
            <p className="newsletter__confirmacion">¡Gracias! Te confirmamos tu suscripción en breve.</p>
          ) : (
            <form className="newsletter__formulario" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="Tu email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter__boton">Suscribirse</button>
            </form>
          )}
          <p className="newsletter__legal">
            Al suscribirte, aceptás nuestra política de privacidad y términos.
          </p>
        </div>
      </div>
    </section>
  )
}
