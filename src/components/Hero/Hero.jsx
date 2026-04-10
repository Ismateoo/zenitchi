import { Link } from 'react-router-dom'
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__contenido">
          <span className="hero__etiqueta">Nueva colección 2026</span>
          <h1 className="hero__titulo">
            Viajá con<br />
            <span className="hero__titulo-acento">Propósito.</span>
          </h1>
          <p className="hero__subtitulo">
            Curaduría experta en equipaje y accesorios diseñados para durar.
            El equilibrio perfecto entre calidez artesanal y funcionalidad moderna.
          </p>
          <div className="hero__ctas">
            <Link to="/catalogo" className="hero__boton hero__boton--primario">
              Ver catálogo
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <img src="/Hero.png" alt="Zenit — Equipaje de viaje" className="hero__imagen" />
        </div>
      </div>
    </section>
  )
}
