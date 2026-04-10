import { useState } from 'react'
import './productoGaleria.css'

export default function ProductoGaleria({ imagenes = [], bgColor }) {
  const [activa, setActiva] = useState(0)

  const idx = activa < imagenes.length ? activa : 0
  const tieneImagenes = imagenes.length > 0

  return (
    <div className="producto-galeria">
      <div
        className="producto-galeria__principal"
        style={{ backgroundColor: bgColor || '#F0EDE8' }}
      >
        {tieneImagenes ? (
          <img
            src={imagenes[idx]}
            alt="Producto"
            className="producto-galeria__img"
          />
        ) : (
          <div className="producto-galeria__icono-placeholder">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(10,10,10,0.15)" strokeWidth="1.5" strokeLinecap="round">
              <rect x="10" y="18" width="44" height="36" rx="4" />
              <path d="M22 18v-8a10 10 0 0120 0v8" />
              <line x1="10" y1="34" x2="54" y2="34" />
              <line x1="5" y1="24" x2="5" y2="48" strokeWidth="2.5" />
              <line x1="59" y1="24" x2="59" y2="48" strokeWidth="2.5" />
            </svg>
          </div>
        )}
      </div>

      {imagenes.length > 1 && (
        <div className="producto-galeria__miniaturas">
          {imagenes.map((src, i) => (
            <button
              key={i}
              className={`producto-galeria__miniatura ${activa === i ? 'producto-galeria__miniatura--activa' : ''}`}
              style={{ backgroundColor: bgColor || '#F0EDE8' }}
              onClick={() => setActiva(i)}
              aria-label={`Imagen ${i + 1}`}
            >
              <img src={src} alt={`Vista ${i + 1}`} className="producto-galeria__mini-img" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
