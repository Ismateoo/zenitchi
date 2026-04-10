import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './productCard.css'

function IconoProducto({ categoria }) {
  if (categoria === 'valijas') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="12" width="28" height="22" rx="3" />
        <path d="M14 12V9a6 6 0 0112 0v3" />
        <line x1="6" y1="22" x2="34" y2="22" />
        <line x1="3" y1="15" x2="3" y2="30" strokeWidth="2" />
        <line x1="37" y1="15" x2="37" y2="30" strokeWidth="2" />
      </svg>
    )
  }
  if (categoria === 'mochilas') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="12" width="20" height="24" rx="4" />
        <path d="M15 12V9a5 5 0 0110 0v3" />
        <line x1="10" y1="22" x2="30" y2="22" />
      </svg>
    )
  }
  if (categoria === 'termos') {
    return (
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="8" y="4" width="16" height="32" rx="5" />
        <path d="M11 4V2a2 2 0 012-2h6a2 2 0 012 2v2" />
        <line x1="8" y1="14" x2="24" y2="14" />
      </svg>
    )
  }
  if (categoria === 'accesorios') {
    return (
      <svg width="40" height="30" viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="32" height="20" rx="3" />
        <path d="M13 6V4a3 3 0 016 0v2" />
        <line x1="4" y1="14" x2="36" y2="14" />
      </svg>
    )
  }
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="18" cy="18" r="14" />
    </svg>
  )
}

export default function ProductCard({ producto, variante = 'home', coloresFiltro = [], tamanosFiltro = [] }) {
  const tieneVariantes = Boolean(producto.variantes?.length)
  const opciones = tieneVariantes
    ? producto.variantes
    : producto.colores?.map(c => ({ ...c, bgColor: producto.bgColor })) || []

  function idxDesdeColores(colores) {
    for (const color of colores) {
      const i = opciones.findIndex(o => o.nombre === color)
      if (i >= 0) return i
    }
    return 0
  }

  const [idx, setIdx] = useState(() => idxDesdeColores(coloresFiltro))

  useEffect(() => {
    setIdx(idxDesdeColores(coloresFiltro))
  }, [coloresFiltro.join(',')])
  const opcionActiva = opciones[idx] || {}
  const bgActual = opcionActiva.imagen
    ? '#FFFFFF'
    : (opcionActiva.bgColor || producto.bgColor || '#F0EDE8')

  const tallaActiva = producto.tallas?.find(t => tamanosFiltro.includes(t.nombre)) || null
  const precioMostrado = tallaActiva ? tallaActiva.precio : producto.precio

  const subtitulo = producto.capacidad
    ? `${producto.material} • ${tallaActiva ? tallaActiva.nombre : producto.capacidad}`
    : producto.material

  function handleColorClick(e, i) {
    e.preventDefault()
    e.stopPropagation()
    setIdx(i)
  }

  return (
    <Link to={`/producto/${producto.id}`} className={`producto-card producto-card--${variante}`}>
      <div className="producto-card__imagen" style={{ backgroundColor: bgActual }}>
        {opcionActiva.imagen ? (
          <img
            src={opcionActiva.imagen}
            alt={producto.nombre}
            className="producto-card__img"
          />
        ) : (
          <div className="producto-card__icono">
            <IconoProducto categoria={producto.categoria} />
          </div>
        )}
      </div>

      <div className="producto-card__info">
        <div className="producto-card__fila-superior">
          <h3 className="producto-card__nombre">{producto.nombre}</h3>
          <span className="producto-card__precio">
            ${precioMostrado.toLocaleString('es-UY')}
          </span>
        </div>

        <p className="producto-card__subtitulo">{subtitulo}</p>

        {opciones.length > 0 && (
          <div className="producto-card__colores">
            {opciones.slice(0, 6).map((op, i) => (
              <button
                key={op.nombre}
                className={`producto-card__color-dot ${idx === i ? 'producto-card__color-dot--activo' : ''}`}
                style={{ backgroundColor: op.hex }}
                title={op.nombre}
                onClick={e => handleColorClick(e, i)}
                aria-label={op.nombre}
              />
            ))}
          </div>
        )}

        {variante === 'home' && (
          <span className="producto-card__cta">Ver detalle</span>
        )}
      </div>
    </Link>
  )
}
