import './filtrosPanel.css'

const OPCIONES_DEFAULT = ['500ml', '1L', '1.2L']

const COLORES_DEFAULT = [
  { nombre: 'Negro',       hex: '#1A1A1A' },
  { nombre: 'Azul',        hex: '#4A86C8' },
  { nombre: 'Lila',        hex: '#9B7EC8' },
  { nombre: 'Rosado',      hex: '#E8849A' },
  { nombre: 'Verde claro', hex: '#7DC87D' },
  { nombre: 'Blanco',      hex: '#E0DDD8' },
  { nombre: 'Terracota',   hex: '#C8412A' },
  { nombre: 'Gris',        hex: '#888880' },
]

export default function FiltrosPanel({
  filtros,
  precioRango,
  onFiltroChange,
  onReset,
  opciones = OPCIONES_DEFAULT,
  labelOpciones = 'Capacidad',
  coloresFiltro = COLORES_DEFAULT,
  materiales = [],
}) {
  const { min, max } = precioRango

  return (
    <aside className="filtros">
      <div className="filtros__grupo">
        <h3 className="filtros__titulo-grupo">{labelOpciones}</h3>
        <ul className="filtros__lista">
          {opciones.map(cap => (
            <li key={cap} className="filtros__item">
              <label className="filtros__label">
                <input
                  type="checkbox"
                  className="filtros__checkbox"
                  checked={filtros.capacidades.includes(cap)}
                  onChange={() => onFiltroChange('capacidad', cap)}
                />
                <span className="filtros__texto">{cap}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {materiales.length > 0 && (
        <div className="filtros__grupo">
          <h3 className="filtros__titulo-grupo">Material</h3>
          <ul className="filtros__lista">
            {materiales.map(mat => (
              <li key={mat} className="filtros__item">
                <label className="filtros__label">
                  <input
                    type="checkbox"
                    className="filtros__checkbox"
                    checked={filtros.materiales.includes(mat)}
                    onChange={() => onFiltroChange('material', mat)}
                  />
                  <span className="filtros__texto">{mat}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="filtros__grupo">
        <h3 className="filtros__titulo-grupo">Color</h3>
        <div className="filtros__colores">
          {coloresFiltro.map(color => (
            <button
              key={color.nombre}
              className={`filtros__color-btn ${filtros.colores.includes(color.nombre) ? 'filtros__color-btn--activo' : ''}`}
              style={{ backgroundColor: color.hex }}
              title={color.nombre}
              onClick={() => onFiltroChange('color', color.nombre)}
              aria-label={color.nombre}
            />
          ))}
        </div>
      </div>

      <div className="filtros__grupo">
        <h3 className="filtros__titulo-grupo">Precio máximo</h3>
        <div className="filtros__precio">
          <input
            type="range"
            className="filtros__slider"
            min={min}
            max={max}
            step={50}
            value={filtros.precioMax}
            onChange={e => onFiltroChange('precioMax', parseInt(e.target.value))}
          />
          <div className="filtros__precio-labels">
            <span>${min.toLocaleString('es-UY')}</span>
            <span>${filtros.precioMax.toLocaleString('es-UY')}</span>
          </div>
        </div>
      </div>

      <button className="filtros__reset" onClick={onReset}>
        Limpiar filtros
      </button>
    </aside>
  )
}
