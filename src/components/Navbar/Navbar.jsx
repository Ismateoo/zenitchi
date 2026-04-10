import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const CATEGORIAS = [
  { label: 'Valijas', slug: 'valijas' },
  { label: 'Mochilas', slug: 'mochilas' },
  { label: 'Termos', slug: 'termos' },
  { label: 'Accesorios', slug: 'accesorios' },
  { label: 'Camping', slug: 'camping' },
]

export default function Navbar() {
  const [busquedaAbierta, setBusquedaAbierta] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (busquedaAbierta) inputRef.current?.focus()
  }, [busquedaAbierta])

  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuAbierto])

  function cerrarMenu() {
    setMenuAbierto(false)
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar__inner">
          <div className="navbar__izquierda">
            <button
              className={`navbar__icono ${menuAbierto ? 'navbar__icono--activo' : ''}`}
              onClick={() => setMenuAbierto(v => !v)}
              aria-label="Menú"
              aria-expanded={menuAbierto}
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="1" y1="1" x2="17" y2="1" />
                <line x1="1" y1="7" x2="17" y2="7" />
                <line x1="1" y1="13" x2="17" y2="13" />
              </svg>
            </button>

            <Link to="/" className="navbar__logo">
              <img src="/logo.svg" alt="Zenit" className="navbar__logo-img" />
            </Link>
          </div>

          <div className="navbar__acciones">
            <div className={`navbar__busqueda ${busquedaAbierta ? 'navbar__busqueda--abierta' : ''}`}>
              <input
                ref={inputRef}
                type="search"
                className="navbar__buscador"
                placeholder="Buscar productos..."
                onBlur={() => setBusquedaAbierta(false)}
              />
              <button
                className="navbar__icono"
                onClick={() => setBusquedaAbierta(v => !v)}
                aria-label="Buscar"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="7.5" cy="7.5" r="5" />
                  <line x1="11.5" y1="11.5" x2="16" y2="16" />
                </svg>
              </button>
            </div>

            <button className="navbar__icono" aria-label="Mi cuenta">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="10" cy="6.5" r="3.5" />
                <path d="M3 18c0-3.314 3.134-6 7-6s7 2.686 7 6" />
              </svg>
            </button>

            <button className="navbar__icono" aria-label="Carrito">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 18a1 1 0 100-2 1 1 0 000 2zM15.5 18a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" stroke="none" />
                <path d="M1 1h2.5l2 10h9l2-7H5.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuAbierto && (
        <div className="navbar__overlay" onClick={cerrarMenu} aria-hidden="true" />
      )}

      <aside className={`navbar__drawer ${menuAbierto ? 'navbar__drawer--abierto' : ''}`}>
        <div className="navbar__drawer-header">
          <button className="navbar__drawer-cerrar" onClick={cerrarMenu} aria-label="Cerrar menú">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="1" y1="1" x2="15" y2="15" />
              <line x1="15" y1="1" x2="1" y2="15" />
            </svg>
          </button>
        </div>

        <nav className="navbar__drawer-nav">
          <p className="navbar__drawer-label">Categorías</p>
          <ul className="navbar__drawer-lista">
            {CATEGORIAS.map(({ label, slug }) => (
              <li key={slug}>
                <NavLink
                  to={`/categoria/${slug}`}
                  className={({ isActive }) =>
                    isActive ? 'navbar__drawer-enlace navbar__drawer-enlace--activo' : 'navbar__drawer-enlace'
                  }
                  onClick={cerrarMenu}
                >
                  {label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="2" y1="7" x2="12" y2="7" />
                    <polyline points="8,3 12,7 8,11" />
                  </svg>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__drawer-footer">
          <Link to="/catalogo" className="navbar__drawer-catalogo" onClick={cerrarMenu}>
            Ver catálogo completo
          </Link>
        </div>
      </aside>
    </>
  )
}
