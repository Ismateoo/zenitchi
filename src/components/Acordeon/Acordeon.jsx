import { useState } from 'react'
import './acordeon.css'

export default function Acordeon({ items }) {
  const [abierto, setAbierto] = useState(0)

  return (
    <div className="acordeon">
      {items.map((item, index) => (
        <div key={index} className={`acordeon__item ${abierto === index ? 'acordeon__item--abierto' : ''}`}>
          <button
            className="acordeon__encabezado"
            onClick={() => setAbierto(abierto === index ? null : index)}
            aria-expanded={abierto === index}
          >
            <span className="acordeon__titulo">{item.titulo}</span>
            <span className="acordeon__icono">{abierto === index ? '−' : '+'}</span>
          </button>
          {abierto === index && (
            <div className="acordeon__contenido">
              {item.contenido}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
