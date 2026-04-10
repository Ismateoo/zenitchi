import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import Catalogo from './components/Catalogo/Catalogo'
import Categoria from './components/Categoria/Categoria'
import Producto from './components/Producto/Producto'
import Error404 from './components/Error404/Error404'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalogo', element: <Catalogo /> },
      { path: '/categoria/:slug', element: <Categoria /> },
      { path: '/producto/:id', element: <Producto /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
