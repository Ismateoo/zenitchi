import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ProductoGaleria from '../ProductoGaleria/ProductoGaleria'
import Acordeon from '../Acordeon/Acordeon'
import ProductCard from '../ProductCard/ProductCard'
import useProductos from '../../api/useProductos'
import './producto.css'

export default function Producto() {
  const { id } = useParams()
  const { producto, obtenerPorId, obtenerRelacionados } = useProductos()
  const [varianteActiva, setVarianteActiva] = useState(0)
  const [tallaActiva, setTallaActiva] = useState(0)

  useEffect(() => {
    obtenerPorId(id)
    setVarianteActiva(0)
    setTallaActiva(0)
  }, [id])

  if (!producto) {
    return (
      <div className="producto__cargando">
        <p>Cargando producto...</p>
      </div>
    )
  }

  // Soporte para variantes (colores con bgColor propio) y colores simples
  const opciones = producto.variantes?.length
    ? producto.variantes
    : producto.colores?.map(c => ({ ...c, bgColor: producto.bgColor })) || []

  const opcionActiva = opciones[varianteActiva] || {}
  const bgActual = opcionActiva.bgColor || producto.bgColor || '#F0EDE8'

  const relacionados = obtenerRelacionados(producto.relacionados || [])

  const acordeonItems = [
    {
      titulo: 'Características',
      contenido: (
        <ul className="producto__caracteristicas-lista">
          {producto.caracteristicas.map((c, i) => (
            <li key={i} className="producto__caracteristica">
              <span className="producto__caracteristica-dot" />
              {c}
            </li>
          ))}
        </ul>
      )
    },
    {
      titulo: 'Información de envío',
      contenido: <p>{producto.envio}</p>
    },
    {
      titulo: 'Garantía',
      contenido: <p>{producto.garantia}</p>
    }
  ]

  return (
    <div className="producto">
      <div className="producto__inner">
        <Breadcrumb items={[
          { label: 'Inicio', href: '/' },
          { label: producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1), href: `/categoria/${producto.categoria}` },
          { label: producto.nombre }
        ]} />

        <div className="producto__layout">
          <div className="producto__galeria-wrap">
            <ProductoGaleria
              bgColor={bgActual}
              imagenes={opcionActiva.imagen ? [opcionActiva.imagen] : []}
            />
          </div>

          <div className="producto__info">
            {producto.etiqueta && (
              <span className="producto__etiqueta">{producto.etiqueta}</span>
            )}

            <h1 className="producto__nombre">{producto.nombre}</h1>
            <p className="producto__precio">
              ${(producto.tallas ? producto.tallas[tallaActiva].precio : producto.precio).toLocaleString('es-UY')}
            </p>

            <p className="producto__descripcion">{producto.descripcion}</p>

            {producto.tallas?.length > 0 && (
              <div className="producto__tallas-wrap">
                <span className="producto__label">Talla</span>
                <div className="producto__tallas">
                  {producto.tallas.map((t, i) => (
                    <button
                      key={t.nombre}
                      className={`producto__talla-btn ${tallaActiva === i ? 'producto__talla-btn--activo' : ''}`}
                      onClick={() => setTallaActiva(i)}
                    >
                      {t.nombre}
                    </button>
                  ))}
                </div>
                {producto.tallas[tallaActiva].medidas && (
                  <span className="producto__talla-medidas">
                    {producto.tallas[tallaActiva].medidas}
                  </span>
                )}
              </div>
            )}

            {opciones.length > 0 && (
              <div className="producto__colores-wrap">
                <span className="producto__label">
                  Color — <span className="producto__color-nombre">{opcionActiva.nombre}</span>
                </span>
                <div className="producto__colores">
                  {opciones.map((op, i) => (
                    <button
                      key={op.nombre}
                      className={`producto__color-btn ${varianteActiva === i ? 'producto__color-btn--activo' : ''}`}
                      style={{ backgroundColor: op.hex }}
                      title={op.nombre}
                      onClick={() => setVarianteActiva(i)}
                      aria-label={op.nombre}
                    />
                  ))}
                </div>
              </div>
            )}

            <button className="producto__agregar">
              Agregar al carrito
            </button>

            <div className="producto__confianza">
              <div className="producto__confianza-item">
                <svg className="producto__confianza-icono" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 4v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span>Envío gratis en compras mayores a $2.000</span>
              </div>
              <div className="producto__confianza-item">
                <svg className="producto__confianza-icono" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Garantía oficial Zenit por 6 meses</span>
              </div>
              <div className="producto__confianza-item">
                <svg className="producto__confianza-icono" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                </svg>
                <span>30 días de cambio sin costo</span>
              </div>
            </div>

            <Acordeon items={acordeonItems} />
          </div>
        </div>
      </div>

      {relacionados.length > 0 && (
        <section className="producto__relacionados">
          <div className="producto__relacionados-inner">
            <div className="producto__relacionados-cabecera">
              <h2 className="producto__relacionados-titulo">También te puede interesar</h2>
              <a href="#" className="producto__relacionados-ver-todo">Ver todo</a>
            </div>
            <div className="producto__relacionados-grid">
              {relacionados.map(p => (
                <ProductCard key={p.id} producto={p} variante="relacionado" />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
