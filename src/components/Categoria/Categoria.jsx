import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import FiltrosPanel from '../FiltrosPanel/FiltrosPanel'
import ProductCard from '../ProductCard/ProductCard'
import useProductos from '../../api/useProductos'
import './categoria.css'

const DESCRIPCIONES = {
  valijas: 'Curaduría de valijas diseñadas para el viajero exigente. Materiales de primer nivel con estética atemporal.',
  mochilas: 'Mochilas urbanas y de trekking para cada estilo de vida. Funcionalidad y diseño en perfecta armonía.',
  termos: 'Termos diseñados para el movimiento. Tecnología de aislamiento al vacío con materiales de primer nivel para mantener la temperatura de tus bebidas donde vayas.',
  accesorios: 'Complementos de viaje diseñados para el detalle. Cada accesorio, una declaración de estilo.',
  camping: 'Equipamiento outdoor de alta performance para tus aventuras al aire libre.',
}

const CONFIG_FILTROS = {
  termos: {
    labelOpciones: 'Capacidad',
    opciones: ['500ml', '1L', '1.2L'],
    coloresFiltro: [
      { nombre: 'Negro',       hex: '#1A1A1A' },
      { nombre: 'Azul',        hex: '#4A86C8' },
      { nombre: 'Lila',        hex: '#9B7EC8' },
      { nombre: 'Rosado',      hex: '#E8849A' },
      { nombre: 'Verde claro', hex: '#7DC87D' },
      { nombre: 'Blanco',      hex: '#E0DDD8' },
      { nombre: 'Terracota',   hex: '#C8412A' },
      { nombre: 'Gris',        hex: '#888880' },
    ],
  },
  valijas: {
    labelOpciones: 'Tamaño',
    opciones: ['Cabina', 'Mediano', 'Grande'],
    materiales: ['Fibra', 'Tela'],
    coloresFiltro: [
      { nombre: 'Negro',       hex: '#1A1A1A' },
      { nombre: 'Gris',        hex: '#888880' },
      { nombre: 'Gris claro',  hex: '#D4CFC9' },
      { nombre: 'Blanco',      hex: '#E8E8E6' },
      { nombre: 'Blanco roto', hex: '#F5F2ED' },
      { nombre: 'Terracota',   hex: '#C8412A' },
      { nombre: 'Rosa',        hex: '#F07060' },
      { nombre: 'Verde',       hex: '#3AADA0' },
    ],
  },
}

const FILTROS_INICIALES = {
  capacidades: [],
  colores: [],
  materiales: [],
  precioMax: null,
}

export default function Categoria() {
  const { slug } = useParams()
  const { lista, obtenerPorCategoria } = useProductos()
  const [filtros, setFiltros] = useState(FILTROS_INICIALES)
  const [filtrosMobileAbiertos, setFiltrosMobileAbiertos] = useState(false)

  const configFiltros = CONFIG_FILTROS[slug] || {}

  useEffect(() => {
    obtenerPorCategoria(slug)
    setFiltros(FILTROS_INICIALES)
  }, [slug])

  const precioRango = lista.length > 0
    ? {
        min: Math.min(...lista.map(p => p.precio)),
        max: Math.max(...lista.map(p => p.precio)),
      }
    : { min: 0, max: 20000 }

  const precioMaxActual = filtros.precioMax ?? precioRango.max

  function handleFiltroChange(tipo, valor) {
    setFiltros(prev => {
      if (tipo === 'capacidad') {
        const capacidades = prev.capacidades.includes(valor) ? [] : [valor]
        return { ...prev, capacidades }
      }
      if (tipo === 'color') {
        const colores = prev.colores.includes(valor) ? [] : [valor]
        return { ...prev, colores }
      }
      if (tipo === 'material') {
        const materiales = prev.materiales.includes(valor)
          ? prev.materiales.filter(m => m !== valor)
          : [...prev.materiales, valor]
        return { ...prev, materiales }
      }
      if (tipo === 'precioMax') {
        return { ...prev, precioMax: valor }
      }
      return prev
    })
  }

  function handleReset() {
    setFiltros(FILTROS_INICIALES)
  }

  const productosFiltrados = lista.filter(p => {
    if (filtros.capacidades.length > 0) {
      const tallasProducto = p.tallas?.map(t => t.nombre) || []
      const coincide = filtros.capacidades.some(c => tallasProducto.includes(c) || p.capacidad === c)
      if (!coincide) return false
    }
    if (filtros.colores.length > 0) {
      const coloresProducto = [
        ...(p.variantes?.map(v => v.nombre) || []),
        ...(p.colores?.map(c => c.nombre) || []),
      ]
      if (!filtros.colores.some(c => coloresProducto.includes(c))) return false
    }
    if (filtros.materiales.length > 0 && !filtros.materiales.includes(p.cuerpo)) return false
    if (p.precio > precioMaxActual) return false
    return true
  })

  const titulo = slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <div className="categoria">
      <div className="categoria__inner">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: titulo }
        ]} />

        <div className="categoria__cabecera">
          <h1 className="categoria__titulo">{titulo}</h1>
          <p className="categoria__descripcion">{DESCRIPCIONES[slug] || ''}</p>
        </div>

        <div className={`categoria__layout${filtrosMobileAbiertos ? ' categoria__layout--filtros-abiertos' : ''}`}>
          <button
            className="categoria__filtros-toggle"
            onClick={() => setFiltrosMobileAbiertos(prev => !prev)}
          >
            {filtrosMobileAbiertos ? '✕ Ocultar filtros' : '⊞ Filtros'}
          </button>
          <FiltrosPanel
            filtros={{ ...filtros, precioMax: precioMaxActual }}
            precioRango={precioRango}
            onFiltroChange={handleFiltroChange}
            onReset={handleReset}
            {...configFiltros}
          />

          <div className="categoria__resultados">
            {(filtros.capacidades.length > 0 || filtros.colores.length > 0 || filtros.materiales.length > 0) ? (
              <div className="categoria__filtros-activos">
                <span className="categoria__contador">{productosFiltrados.length} productos</span>
                <div className="categoria__tags">
                  {filtros.capacidades.map(cap => (
                    <button
                      key={cap}
                      className="categoria__tag"
                      onClick={() => handleFiltroChange('capacidad', cap)}
                    >
                      {cap} ×
                    </button>
                  ))}
                  {filtros.colores.map(color => (
                    <button
                      key={color}
                      className="categoria__tag"
                      onClick={() => handleFiltroChange('color', color)}
                    >
                      {color} ×
                    </button>
                  ))}
                  {filtros.materiales.map(mat => (
                    <button
                      key={mat}
                      className="categoria__tag"
                      onClick={() => handleFiltroChange('material', mat)}
                    >
                      {mat} ×
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <span className="categoria__contador">{productosFiltrados.length} productos</span>
            )}

            {productosFiltrados.length > 0 ? (
              <div className="categoria__grid">
                {productosFiltrados.map(producto => (
                  <ProductCard
                    key={producto.id}
                    producto={producto}
                    variante="catalogo"
                    coloresFiltro={filtros.colores}
                    tamanosFiltro={filtros.capacidades}
                  />
                ))}
              </div>
            ) : (
              <div className="categoria__vacio">
                <p>No hay productos que coincidan con los filtros seleccionados.</p>
                <button className="categoria__limpiar" onClick={handleReset}>Limpiar filtros</button>
              </div>
            )}

            {productosFiltrados.length > 0 && (
              <div className="categoria__paginacion">
                <button className="categoria__pag-btn categoria__pag-btn--nav">‹ Anterior</button>
                <button className="categoria__pag-btn categoria__pag-btn--activo">01</button>
                <button className="categoria__pag-btn">02</button>
                <button className="categoria__pag-btn">03</button>
                <button className="categoria__pag-btn categoria__pag-btn--nav">Siguiente ›</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
