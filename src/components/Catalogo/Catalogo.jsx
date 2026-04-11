import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import FiltrosPanel from '../FiltrosPanel/FiltrosPanel'
import useProductos from '../../api/useProductos'
import './catalogo.css'

const CATEGORIAS = [
  { slug: 'todos', label: 'Todos' },
  { slug: 'valijas', label: 'Valijas' },
  { slug: 'mochilas', label: 'Mochilas' },
  { slug: 'termos', label: 'Termos' },
  { slug: 'accesorios', label: 'Accesorios' },
  { slug: 'camping', label: 'Camping' },
]

const FILTROS_INICIALES = {
  capacidades: [],
  colores: [],
  precioMax: null, // null = sin filtro aplicado
}

export default function Catalogo() {
  const { lista, obtenerTodos } = useProductos()
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [filtros, setFiltros] = useState(FILTROS_INICIALES)
  const [filtrosMobileAbiertos, setFiltrosMobileAbiertos] = useState(false)

  useEffect(() => {
    obtenerTodos()
  }, [])

  // Rango de precio dinámico según la categoría activa
  const productosCategoria = lista.filter(p =>
    categoriaActiva === 'todos' || p.categoria === categoriaActiva
  )
  const precioRango = productosCategoria.length > 0
    ? {
        min: Math.min(...productosCategoria.map(p => p.precio)),
        max: Math.max(...productosCategoria.map(p => p.precio)),
      }
    : { min: 0, max: 20000 }

  // El valor real del slider: si el usuario no tocó el precio, muestra el máximo
  const precioMaxActual = filtros.precioMax ?? precioRango.max

  function handleCategoriaChange(slug) {
    setCategoriaActiva(slug)
    setFiltros(FILTROS_INICIALES)
  }

  function handleFiltroChange(tipo, valor) {
    setFiltros(prev => {
      if (tipo === 'capacidad') {
        const capacidades = prev.capacidades.includes(valor)
          ? prev.capacidades.filter(c => c !== valor)
          : [...prev.capacidades, valor]
        return { ...prev, capacidades }
      }
      if (tipo === 'color') {
        const colores = prev.colores.includes(valor) ? [] : [valor]
        return { ...prev, colores }
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

  const productosFiltrados = productosCategoria.filter(p => {
    if (filtros.capacidades.length > 0 && !filtros.capacidades.includes(p.capacidad)) return false
    if (filtros.colores.length > 0) {
      const coloresProducto = [
        ...(p.variantes?.map(v => v.nombre) || []),
        ...(p.colores?.map(c => c.nombre) || []),
      ]
      if (!filtros.colores.some(c => coloresProducto.includes(c))) return false
    }
    if (p.precio > precioMaxActual) return false
    return true
  })

  const hayFiltrosActivos =
    filtros.capacidades.length > 0 ||
    filtros.colores.length > 0 ||
    (filtros.precioMax !== null && filtros.precioMax < precioRango.max)

  return (
    <div className="catalogo">
      <div className="catalogo__header">
        <div className="catalogo__header-inner">
          <h1 className="catalogo__titulo">Catálogo</h1>
          <p className="catalogo__subtitulo">Toda la colección Zenit en un solo lugar.</p>
        </div>
      </div>

      <div className="catalogo__inner">
        <div className="catalogo__tabs">
          {CATEGORIAS.map(({ slug, label }) => (
            <button
              key={slug}
              className={`catalogo__tab ${categoriaActiva === slug ? 'catalogo__tab--activo' : ''}`}
              onClick={() => handleCategoriaChange(slug)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={`catalogo__layout${filtrosMobileAbiertos ? ' catalogo__layout--filtros-abiertos' : ''}`}>
          <button
            className="catalogo__filtros-toggle"
            onClick={() => setFiltrosMobileAbiertos(prev => !prev)}
          >
            {filtrosMobileAbiertos ? '✕ Ocultar filtros' : '⊞ Filtros'}
          </button>
          <FiltrosPanel
            filtros={{ ...filtros, precioMax: precioMaxActual }}
            precioRango={precioRango}
            onFiltroChange={handleFiltroChange}
            onReset={handleReset}
          />

          <div className="catalogo__resultados">
            <div className="catalogo__barra">
              <span className="catalogo__contador">{productosFiltrados.length} productos</span>

              {hayFiltrosActivos && (
                <div className="catalogo__tags">
                  {filtros.capacidades.map(cap => (
                    <button key={cap} className="catalogo__tag" onClick={() => handleFiltroChange('capacidad', cap)}>
                      {cap} ×
                    </button>
                  ))}
                  {filtros.colores.map(color => (
                    <button key={color} className="catalogo__tag" onClick={() => handleFiltroChange('color', color)}>
                      {color} ×
                    </button>
                  ))}
                </div>
              )}
            </div>

            {productosFiltrados.length > 0 ? (
              <div className="catalogo__grid">
                {productosFiltrados.map(producto => (
                  <ProductCard
                    key={producto.id}
                    producto={producto}
                    variante="catalogo"
                    coloresFiltro={filtros.colores}
                  />
                ))}
              </div>
            ) : (
              <div className="catalogo__vacio">
                <p>No hay productos que coincidan con la selección.</p>
                <button className="catalogo__limpiar" onClick={() => { handleReset(); setCategoriaActiva('todos') }}>
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
