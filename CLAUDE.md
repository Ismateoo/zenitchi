# CLAUDE.md — Zenit E-Commerce

## Descripción del Proyecto
E-commerce de equipaje y accesorios de viaje "Zenit". Tienda con diseño arquitectónico minimalista.
Páginas principales: Home, Categoría de productos (con filtros), y Detalle de producto.

---

## Stack Tecnológico

- **Framework:** React 18 + Vite
- **Lenguaje:** JavaScript (JSX) — sin TypeScript
- **Routing:** React Router DOM v6 con `createBrowserRouter`
- **Estilos:** CSS plano por componente (no CSS Modules)
- **Fetching:** Custom hooks con fetch nativo
- **Fuente:** Headline - Manrope
Body - Work Sans
Label - Wok Sans
---

## Paleta de Colores

```css
--color-primary: #C1440E;      /* terracota/naranja — botones, acentos */
--color-black: #1A1A1A;        /* negro — texto, categorías oscuras */
--color-gray-light: #F2F2F0;   /* fondo claro */
--color-gray-mid: #BFC0C1;     /* bordes, textos secundarios */
--color-white: #FFFFFF;
```

---

## Estructura de Carpetas

```
src/
├── components/
│   └── NombreComponente/
│       ├── NombreComponente.jsx
│       └── nombreComponente.css
├── api/
│   └── useNombreRecurso.js    # Custom hooks para llamadas a la API
├── App.jsx
├── main.jsx
└── index.css                  # Reset global + fuente
```

---

## Comandos Principales

```bash
npm run dev       # Servidor de desarrollo (puerto 5173)
npm run build     # Build de producción
npm run preview   # Preview del build
npm run lint      # ESLint
```

---

## Convenciones de Código

### Componentes
- **`export default function NombreComponente()`** — siempre así, nunca arrow function ni named export
- Un componente por archivo, en su propia carpeta
- El archivo JSX en PascalCase: `ProductCard.jsx`
- El archivo CSS en camelCase/minúscula: `productCard.css`

```jsx
// ✅ Correcto
import "./registro.css";

export default function Registro({ prop1, prop2 }) {
  return (...)
}

// ❌ Evitar
const Registro = () => (...)
export { Registro }
```

### CSS
- CSS plano, **un archivo por componente**, importado directamente: `import "./miComponente.css"`
- Clases en **snake_case con doble guion BEM**: `contenedor__elemento`, `elemento__modificador`
- No usar CSS Modules (sin `.module.css`)
- Variables globales y reset en `index.css`

```css
/* ✅ Correcto */
.contenedor__producto { ... }
.producto__imagen { ... }
.producto__titulo { ... }

/* ❌ Evitar */
.productCard { ... }
.ProductImage { ... }
```

### Routing
- Rutas definidas en `main.jsx` con `createBrowserRouter`
- Layout raíz con `<Outlet />` para páginas anidadas
- Siempre definir `errorElement` en la ruta raíz

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categoria/:slug", element: <Categoria /> },
      { path: "/producto/:id", element: <Producto /> },
    ]
  }
])
```

### Custom Hooks (API)
- Viven en `/src/api/`
- Nombrados `useNombreRecurso.js`
- Retornan los datos y las funciones para obtenerlos

```js
// ✅ Patrón usado en el proyecto
export default function useProductos() {
  const [productos, setProductos] = useState([])

  async function obtenerProductos() {
    const res = await fetch('/api/productos')
    const data = await res.json()
    setProductos(data)
  }

  return { obtenerProductos, productos }
}
```

### Estado y Efectos
- Estado con `useState`, efectos con `useEffect`
- Llamadas a la API dentro de `useEffect` al montar el componente
- Props pasadas explícitamente de padre a hijo (sin Context por ahora)

---

## Páginas del Proyecto

### Home (`/`)
Secciones: Hero, Categorías Destacadas, Productos más buscados, Banner comunidad, Footer

### Categoría (`/categoria/:slug`)
Filtros laterales (capacidad, color, rango de precio) + grilla de productos con paginación

### Producto (`/producto/:id`)
Galería de imágenes, selector de color, botón agregar al carrito, acordeones (características, envío, garantía), productos relacionados

---

## Reglas para Claude

1. **Siempre usar JavaScript (JSX)** — nunca agregar TypeScript ni `.ts`/`.tsx`
2. **CSS plano** — nunca usar CSS Modules, Tailwind, ni styled-components
3. **Nomenclatura BEM** en clases CSS: `bloque__elemento`
4. **Un componente = una carpeta** con su JSX y su CSS
5. Antes de crear un componente, verificar si ya existe algo reutilizable
6. No instalar dependencias nuevas sin mencionarlo
7. Al terminar cada tarea, listar los archivos creados o modificados
8. Respetar la paleta de colores definida arriba — no inventar colores nuevos
