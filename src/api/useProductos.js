import { useState } from 'react'
import { productos, productosCatalogo } from '../data/productos'

export default function useProductos() {
  const [lista, setLista] = useState([])
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(false)

  function obtenerDestacados() {
    setCargando(true)
    const destacados = productos.filter(p => p.destacado)
    setLista(destacados)
    setCargando(false)
  }

  function obtenerPorCategoria(slug) {
    setCargando(true)
    const resultado = productosCatalogo[slug] || []
    setLista(resultado)
    setCargando(false)
  }

  function obtenerPorId(id) {
    setCargando(true)
    const encontrado = productos.find(p => p.id === parseInt(id))
    setProducto(encontrado || null)
    setCargando(false)
  }

  function obtenerTodos() {
    setCargando(true)
    const todos = Object.values(productosCatalogo).flat()
    setLista(todos)
    setCargando(false)
  }

  function obtenerRelacionados(ids) {
    return ids
      .map(id => productos.find(p => p.id === id))
      .filter(Boolean)
      .slice(0, 4)
  }

  return { lista, producto, cargando, obtenerDestacados, obtenerPorCategoria, obtenerPorId, obtenerTodos, obtenerRelacionados }
}
