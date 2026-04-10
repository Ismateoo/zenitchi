import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import useProductos from '../../api/useProductos'
import './loMasBuscado.css'

export default function LoMasBuscado() {
  const { lista, obtenerDestacados } = useProductos()

  useEffect(() => {
    obtenerDestacados()
  }, [])

  return (
    <section className="lo-mas-buscado">
      <div className="lo-mas-buscado__inner">
        <div className="lo-mas-buscado__cabecera">
          <h2 className="lo-mas-buscado__titulo">Lo más buscado</h2>
        </div>

        <div className="lo-mas-buscado__grid">
          {lista.map(producto => (
            <ProductCard key={producto.id} producto={producto} variante="home" />
          ))}
        </div>
      </div>
    </section>
  )
}
