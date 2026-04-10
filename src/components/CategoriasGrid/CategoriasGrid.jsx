import { Link } from 'react-router-dom'
import './categoriasGrid.css'

function IconoMochila() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="8" width="14" height="17" rx="3" />
      <path d="M10 8V6a4 4 0 018 0v2" />
      <path d="M10 14h8" />
    </svg>
  )
}

function IconoAccesorios() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="9" />
      <path d="M14 10v4l3 2" />
    </svg>
  )
}

function IconoCamping() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22l10-16 10 16H4z" />
      <path d="M11 22v-5a3 3 0 016 0v5" />
    </svg>
  )
}

const CATEGORIAS_PEQUENAS = [
  { slug: 'mochilas', nombre: 'Mochilas', descripcion: 'Versatilidad urbana.', Icono: IconoMochila },
  { slug: 'accesorios', nombre: 'Accesorios', descripcion: 'Detalles esenciales.', Icono: IconoAccesorios },
  { slug: 'camping', nombre: 'Camping', descripcion: 'Equipamiento outdoor.', Icono: IconoCamping },
]

export default function CategoriasGrid() {
  return (
    <section className="categorias">
      <div className="categorias__inner">
        <div className="categorias__cabecera">
          <div>
            <h2 className="categorias__titulo">Categorías destacadas</h2>
            <p className="categorias__subtitulo">Explorá nuestra selección premium para cada tipo de aventura.</p>
          </div>
        </div>

        <div className="categorias__grid-grande">
          <div className="categorias__card categorias__card--valijas">
            <div className="categorias__card-imagen-wrap">
              <img src="/Categorias/Categoria__Valija.png" alt="Valijas" className="categorias__card-imagen categorias__card-imagen--normal" />
              <img src="/Categorias/Categoria__Valija__Hover.png" alt="Valijas" className="categorias__card-imagen categorias__card-imagen--hover" />
            </div>
            <div className="categorias__card-info">
              <h3 className="categorias__card-nombre">Valijas</h3>
              <p className="categorias__card-descripcion">Resistencia y elegancia en cada kilómetro recorrido.</p>
              <Link to="/categoria/valijas" className="categorias__card-boton">Ver valijas →</Link>
            </div>
          </div>

          <div className="categorias__card categorias__card--termos">
            <div className="categorias__card-imagen-wrap">
              <img src="/Categorias/Categoria__Termo.png" alt="Termos" className="categorias__card-imagen categorias__card-imagen--normal" />
              <img src="/Categorias/Categoria__Termo__Hover.png" alt="Termos" className="categorias__card-imagen categorias__card-imagen--hover" />
            </div>
            <div className="categorias__card-info">
              <h3 className="categorias__card-nombre">Termos</h3>
              <p className="categorias__card-descripcion">Tecnología de aislamiento superior para tus bebidas favoritas.</p>
              <Link to="/categoria/termos" className="categorias__card-boton">Ver termos →</Link>
            </div>
          </div>
        </div>

        <div className="categorias__grid-pequenas">
          {CATEGORIAS_PEQUENAS.map(({ slug, nombre, descripcion, Icono }) => (
            <Link key={slug} to={`/categoria/${slug}`} className="categorias__card-pequena">
              <div className="categorias__card-pequena-icono">
                <Icono />
              </div>
              <div>
                <h3 className="categorias__card-pequena-nombre">{nombre}</h3>
                <p className="categorias__card-pequena-descripcion">{descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
