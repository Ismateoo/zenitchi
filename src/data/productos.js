export const productos = [
  {
    id: 1,
    nombre: "Valija Zenit Pro L",
    slug: "valija-zenit-pro-l",
    categoria: "valijas",
    precio: 18400,
    precioAnterior: null,
    material: "Aluminio Reforzado",
    capacidad: "85L",
    etiqueta: "Novedad",
    bgColor: "#F0E8E4",
    colores: [
      { nombre: "Terracota", hex: "#C8412A" },
      { nombre: "Negro", hex: "#0A0A0A" },
      { nombre: "Azul gris", hex: "#6B7D8F" },
      { nombre: "Gris claro", hex: "#D4CFC9" }
    ],
    descripcion: "Diseñada para el viajero moderno que no sacrifica estilo por funcionalidad. La serie Zenit Pro desarrolla ingeniería de precisión con una estética arquitectónica atemporal, ofreciendo durabilidad suprema y una ligereza sorprendente.",
    caracteristicas: [
      "Capacidad: 85L (expandible)",
      "Estructura de aluminio reforzado",
      "Ruedas silenciosas 360°",
      "Cierre TSA aprobado",
      "Peso: 3.8kg"
    ],
    envio: "Envío gratis en compras superiores a $2.000. Plazo de entrega: 3–5 días hábiles en Montevideo, 5–7 días en el interior del país.",
    garantia: "Garantía oficial Zenit por 6 meses. Cubre defectos de fabricación y materiales bajo uso normal.",
    destacado: false,
    relacionados: [2, 3, 4, 10]
  },
  {
    id: 2,
    nombre: "Mochila Nomad 25",
    slug: "mochila-nomad-25",
    categoria: "mochilas",
    precio: 6200,
    precioAnterior: null,
    material: "Nylon Waterproof",
    capacidad: "Charcoal",
    etiqueta: null,
    bgColor: "#EAEAE6",
    colores: [
      { nombre: "Charcoal", hex: "#3D3D3D" },
      { nombre: "Negro", hex: "#0A0A0A" },
      { nombre: "Verde", hex: "#4A6741" }
    ],
    descripcion: "Mochila urbana de alto rendimiento para el profesional en movimiento. Materiales técnicos waterproof con acabados premium.",
    caracteristicas: [
      "Capacidad: 25L",
      "Compartimento porta-laptop 15.6\"",
      "Material nylon waterproof",
      "Correas ergonómicas acolchadas",
      "Puerto USB externo"
    ],
    envio: "Envío gratis en compras superiores a $2.000. Plazo de entrega: 3–5 días hábiles en Montevideo.",
    garantia: "Garantía oficial Zenit por 6 meses.",
    destacado: false,
    relacionados: [1, 3, 4, 12]
  },
  {
    id: 3,
    nombre: "Termo Zenit 1.2L",
    slug: "termo-zenit-1-2l",
    categoria: "termos",
    precio: 4500,
    precioAnterior: null,
    material: "Acero 18/8",
    capacidad: "Matte Black",
    etiqueta: null,
    bgColor: "#ECEAE7",
    colores: [
      { nombre: "Matte black", hex: "#1A1A1A" },
      { nombre: "Terracota", hex: "#C8412A" },
      { nombre: "Gris", hex: "#888880" }
    ],
    descripcion: "Vacío de doble pared con aislamiento al vacío. Mantiene bebidas calientes hasta 12 horas y frías hasta 24 horas.",
    caracteristicas: [
      "Capacidad: 1.2L",
      "Acero inoxidable 18/8",
      "Doble pared al vacío",
      "Tapa con boquilla integrada",
      "Sin BPA"
    ],
    envio: "Envío gratis en compras superiores a $2.000.",
    garantia: "Garantía oficial Zenit por 6 meses.",
    destacado: false,
    relacionados: [1, 2, 10, 11]
  },
  {
    id: 4,
    nombre: "Billetera Travel",
    slug: "billetera-travel",
    categoria: "accesorios",
    precio: 2100,
    precioAnterior: null,
    material: "Cuero Genuino",
    capacidad: "Terracotta",
    etiqueta: null,
    bgColor: "#F5EBE0",
    colores: [
      { nombre: "Terracota", hex: "#C8412A" },
      { nombre: "Negro", hex: "#0A0A0A" },
      { nombre: "Camel", hex: "#A0765A" }
    ],
    descripcion: "Billetera delgada de cuero genuino con compartimentos para tarjetas y billetes. Diseño minimalista para el viajero urbano.",
    caracteristicas: [
      "Cuero genuino curtido",
      "6 ranuras para tarjetas",
      "Compartimento para billetes",
      "Protección RFID",
      "Dimensiones: 10 × 8 × 1cm"
    ],
    envio: "Envío gratis en compras superiores a $2.000.",
    garantia: "Garantía oficial Zenit por 6 meses.",
    destacado: false,
    relacionados: [1, 2, 3, 50]
  },
  {
    id: 50,
    nombre: "Termo Rumbo Flex",
    slug: "termo-rumbo-flex",
    categoria: "termos",
    precio: 1200,
    precioAnterior: null,
    material: "Acero inoxidable 18/8",
    capacidad: "1L",
    etiqueta: "Nuevo",
    variantes: [
      { nombre: "Azul",        hex: "#4A86C8", bgColor: "#E8EEF8", imagen: "/Termos/Flex/termo-rumbo-flex-1l-azul-termo-rumbo-flex-1l-azul (1).webp" },
      { nombre: "Blanco",      hex: "#E0DDD8", bgColor: "#F5F2EE", imagen: "/Termos/Flex/termo-rumbo-flex-1l-blanco-termo-rumbo-flex-1l-blanco.webp" },
      { nombre: "Lila",        hex: "#9B7EC8", bgColor: "#EDE8F5", imagen: "/Termos/Flex/termo-rumbo-flex-1l-lila-termo-rumbo-flex-1l-lila.webp" },
      { nombre: "Negro",       hex: "#1A1A1A", bgColor: "#E4E4E2", imagen: "/Termos/Flex/termo-rumbo-flex-1l-negro-termo-rumbo-flex-1l-negro.webp" },
      { nombre: "Rosado",      hex: "#E8849A", bgColor: "#F5E8EC", imagen: "/Termos/Flex/termo-rumbo-flex-1l-rosado-termo-rumbo-flex-1l-rosado.webp" },
      { nombre: "Verde claro", hex: "#7DC87D", bgColor: "#E8F5E8", imagen: "/Termos/Flex/termo-rumbo-flex-1l-verde-claro-termo-rumbo-flex-1l-verde-claro.webp" },
    ],
    descripcion: "Diseñado para el movimiento. La línea Rumbo Flex combina tecnología de aislamiento al vacío con una construcción ligera y ergonómica, ideal para el viajero urbano y el aventurero outdoor.",
    caracteristicas: [
      "Capacidad: 1 litro",
      "Mantiene caliente hasta 12 horas",
      "Mantiene frío hasta 24 horas",
      "Acero inoxidable 18/8, libre de BPA",
      "Tapa con boquilla integrada y seguro",
      "Cuerpo antideslizante",
      "Peso: 320g"
    ],
    envio: "Envío gratis en compras superiores a $2.000. Plazo de entrega: 3–5 días hábiles en Montevideo, 5–7 días en el interior.",
    garantia: "Garantía oficial Zenit por 6 meses. Cubre defectos de fabricación y materiales.",
    destacado: true,
    relacionados: [51, 3, 1, 2]
  },
  {
    id: 51,
    nombre: "Termo Rumbo 500ml",
    slug: "termo-rumbo-500ml",
    categoria: "termos",
    precio: 699,
    precioAnterior: null,
    material: "Acero inoxidable 18/8",
    capacidad: "500ml",
    etiqueta: null,
    variantes: [
      { nombre: "Azul",        hex: "#4A86C8", bgColor: "#E8EEF8", imagen: "/Termos/500ml/termo-rumbo-500ml-azul-termo-rumbo-500ml-azul.webp" },
      { nombre: "Negro",       hex: "#1A1A1A", bgColor: "#E4E4E2", imagen: "/Termos/500ml/termo-rumbo-500ml-negro-termo-rumbo-500ml-negro.webp" },
      { nombre: "Lila",        hex: "#9B7EC8", bgColor: "#EDE8F5" },
      { nombre: "Rosado",      hex: "#E8849A", bgColor: "#F5E8EC", imagen: "/Termos/500ml/termo-rumbo-500ml-rosa-termo-rumbo-500ml-rosa.webp" },
      { nombre: "Verde claro", hex: "#7DC87D", bgColor: "#E8F5E8", imagen: "/Termos/500ml/termo-rumbo-500ml-verde-claro-termo-rumbo-500ml-verde-claro.webp" },
    ],
    descripcion: "La versión compacta de la línea Rumbo. Perfecta para el día a día, entra en cualquier bolso y mantiene la temperatura de tus bebidas donde vayas.",
    caracteristicas: [
      "Capacidad: 500ml",
      "Mantiene caliente hasta 10 horas",
      "Mantiene frío hasta 20 horas",
      "Acero inoxidable 18/8, libre de BPA",
      "Tapa rosca con sello hermético",
      "Diseño compacto y liviano",
      "Peso: 220g"
    ],
    envio: "Envío gratis en compras superiores a $2.000. Plazo de entrega: 3–5 días hábiles en Montevideo, 5–7 días en el interior.",
    garantia: "Garantía oficial Zenit por 6 meses. Cubre defectos de fabricación y materiales.",
    destacado: true,
    relacionados: [50, 3, 1, 2]
  },
  {
    id: 60,
    nombre: "Zenit Hollywood",
    slug: "zenit-hollywood",
    categoria: "valijas",
    precio: 2999,
    precioAnterior: null,
    material: "Polipropileno",
    capacidad: "Cabina / Mediano / Grande",
    etiqueta: "Nuevo",
    tallas: [
      { nombre: "Cabina", precio: 2999, medidas: "55 × 38 × 23 cm" },
      { nombre: "Mediano", precio: 3999, medidas: "68 × 45 × 28 cm" },
      { nombre: "Grande", precio: 4999, medidas: "78 × 52 × 32 cm" }
    ],
    variantes: [
      { nombre: "Rosa", hex: "#F07060", bgColor: "#FDF0EE", imagen: "/Valijas/hollywood_rosa.webp" },
      { nombre: "Verde", hex: "#3AADA0", bgColor: "#E8F5F3", imagen: "/Valijas/hollywood_verde.webp" }
    ],
    descripcion: "La Hollywood redefine el viaje con su cuerpo rígido ultraligero y su diseño de líneas limpias. Fabricada en polipropileno de alta resistencia, combina durabilidad y estilo para el viajero que no hace concesiones.",
    caracteristicas: [
      "Cuerpo rígido de polipropileno de alta resistencia",
      "Ruedas dobles silenciosas 360°",
      "Candado TSA integrado",
      "Interior con divisor separable y bolsillos con cremallera",
      "Disponible en 3 tallas: Cabina, Mediano y Grande"
    ],
    envio: "Envío gratis en compras superiores a $2.000. Plazo de entrega: 3–5 días hábiles en Montevideo, 5–7 días en el interior del país.",
    garantia: "Garantía oficial Zenit por 6 meses. Cubre defectos de fabricación y materiales bajo uso normal.",
    destacado: true,
    relacionados: [61, 20, 21, 22]
  },
  {
    id: 61,
    nombre: "Swissbrand Enstone",
    slug: "swissbrand-enstone",
    categoria: "valijas",
    precio: 2999,
    precioAnterior: null,
    material: "Polipropileno",
    capacidad: "Cabina / Mediano / Grande",
    etiqueta: "Nuevo",
    tallas: [
      { nombre: "Cabina", precio: 2999, medidas: "55 × 38 × 23 cm" },
      { nombre: "Mediano", precio: 3999, medidas: "68 × 45 × 28 cm" },
      { nombre: "Grande", precio: 4999, medidas: "78 × 52 × 32 cm" }
    ],
    variantes: [
      { nombre: "Blanco", hex: "#E8E8E6", bgColor: "#F5F5F5", imagen: "/Valijas/enstone.webp" }
    ],
    descripcion: "La Enstone de Swissbrand combina ingeniería suiza con un diseño minimalista de alto impacto. Estructura de polipropileno ultraligera con sistema de expansión integrado, pensada para los que viajan más y cargan menos.",
    caracteristicas: [
      "Estructura de polipropileno ultraligera",
      "Ruedas dobles silenciosas 360°",
      "Cierre TSA certificado",
      "Sistema de expansión de 5cm",
      "Interior compartimentado con cintas de sujeción"
    ],
    envio: "Envío gratis en compras superiores a $2.000. Plazo de entrega: 3–5 días hábiles en Montevideo, 5–7 días en el interior del país.",
    garantia: "Garantía Swissbrand por 12 meses. Cubre defectos de fabricación y materiales bajo uso normal.",
    destacado: true,
    relacionados: [60, 20, 21, 22]
  }
]

export const productosCatalogo = {
  termos: [

    {
      id: 50,
      nombre: "Termo Rumbo Flex",
      slug: "termo-rumbo-flex",
      categoria: "termos",
      precio: 1200,
      material: "Acero inoxidable 18/8",
      capacidad: "1L",
      variantes: [
        { nombre: "Azul",        hex: "#4A86C8", bgColor: "#E8EEF8", imagen: "/Termos/Flex/termo-rumbo-flex-1l-azul-termo-rumbo-flex-1l-azul (1).webp" },
        { nombre: "Blanco",      hex: "#E0DDD8", bgColor: "#F5F2EE", imagen: "/Termos/Flex/termo-rumbo-flex-1l-blanco-termo-rumbo-flex-1l-blanco.webp" },
        { nombre: "Lila",        hex: "#9B7EC8", bgColor: "#EDE8F5", imagen: "/Termos/Flex/termo-rumbo-flex-1l-lila-termo-rumbo-flex-1l-lila.webp" },
        { nombre: "Negro",       hex: "#1A1A1A", bgColor: "#E4E4E2", imagen: "/Termos/Flex/termo-rumbo-flex-1l-negro-termo-rumbo-flex-1l-negro.webp" },
        { nombre: "Rosado",      hex: "#E8849A", bgColor: "#F5E8EC", imagen: "/Termos/Flex/termo-rumbo-flex-1l-rosado-termo-rumbo-flex-1l-rosado.webp" },
        { nombre: "Verde claro", hex: "#7DC87D", bgColor: "#E8F5E8", imagen: "/Termos/Flex/termo-rumbo-flex-1l-verde-claro-termo-rumbo-flex-1l-verde-claro.webp" },
      ]
    },
    {
      id: 51,
      nombre: "Termo Rumbo 500ml",
      slug: "termo-rumbo-500ml",
      categoria: "termos",
      precio: 699,
      material: "Acero inoxidable 18/8",
      capacidad: "500ml",
      variantes: [
        { nombre: "Azul",        hex: "#4A86C8", bgColor: "#E8EEF8", imagen: "/Termos/500ml/termo-rumbo-500ml-azul-termo-rumbo-500ml-azul.webp" },
        { nombre: "Negro",       hex: "#1A1A1A", bgColor: "#E4E4E2", imagen: "/Termos/500ml/termo-rumbo-500ml-negro-termo-rumbo-500ml-negro.webp" },
        { nombre: "Lila",        hex: "#9B7EC8", bgColor: "#EDE8F5" },
        { nombre: "Rosado",      hex: "#E8849A", bgColor: "#F5E8EC", imagen: "/Termos/500ml/termo-rumbo-500ml-rosa-termo-rumbo-500ml-rosa.webp" },
        { nombre: "Verde claro", hex: "#7DC87D", bgColor: "#E8F5E8", imagen: "/Termos/500ml/termo-rumbo-500ml-verde-claro-termo-rumbo-500ml-verde-claro.webp" },
      ]
    },
    {
      id: 10,
      nombre: "Termo Zenit Classic",
      slug: "termo-zenit-classic",
      categoria: "termos",
      precio: 799,
      material: "Brushed Steel",
      capacidad: "500ml",
      bgColor: "#ECEAE7",
      colores: [
        { nombre: "Arena", hex: "#D4C5B0" },
        { nombre: "Terracota", hex: "#C8412A" },
        { nombre: "Negro", hex: "#0A0A0A" }
      ]
    },
    {
      id: 11,
      nombre: "Monolith Vessel",
      slug: "monolith-vessel",
      categoria: "termos",
      precio: 1800,
      material: "Obsidian Black",
      capacidad: "1.2L",
      bgColor: "#E4E4E2",
      colores: [
        { nombre: "Negro", hex: "#0A0A0A" },
        { nombre: "Gris", hex: "#888880" }
      ]
    },
    {
      id: 12,
      nombre: "Axis Thermal",
      slug: "axis-thermal",
      categoria: "termos",
      precio: 1100,
      material: "Alabaster White",
      capacidad: "1L",
      bgColor: "#F0EDE8",
      colores: [
        { nombre: "Arena", hex: "#D4C5B0" },
        { nombre: "Verde", hex: "#2D5A3A" }
      ]
    },
    {
      id: 13,
      nombre: "Commuter Arc",
      slug: "commuter-arc",
      categoria: "termos",
      precio: 599,
      material: "Concrete Grey",
      capacidad: "500ml",
      bgColor: "#E8E6E2",
      colores: [
        { nombre: "Gris", hex: "#888880" },
        { nombre: "Terracota", hex: "#C8412A" }
      ]
    },
    {
      id: 14,
      nombre: "Zenit Pro XL",
      slug: "zenit-pro-xl",
      categoria: "termos",
      precio: 1650,
      material: "Titanium Steel",
      capacidad: "1.2L",
      bgColor: "#E6E4E0",
      colores: [
        { nombre: "Negro", hex: "#0A0A0A" },
        { nombre: "Gris", hex: "#888880" }
      ]
    },
    {
      id: 15,
      nombre: "Era Vessel",
      slug: "era-vessel",
      categoria: "termos",
      precio: 950,
      material: "Deep Forest",
      capacidad: "1L",
      bgColor: "#E4EBEA",
      colores: [
        { nombre: "Verde", hex: "#2D5A3A" },
        { nombre: "Terracota", hex: "#C8412A" },
        { nombre: "Arena", hex: "#D4C5B0" }
      ]
    }
  ],
  valijas: [
    {
      id: 60,
      nombre: "Zenit Hollywood",
      slug: "zenit-hollywood",
      categoria: "valijas",
      precio: 2999,
      material: "Polipropileno",
      cuerpo: "Fibra",
      capacidad: "Cabina / Mediano / Grande",
      tallas: [
        { nombre: "Cabina", precio: 2999, medidas: "55 × 38 × 23 cm" },
        { nombre: "Mediano", precio: 3999, medidas: "68 × 45 × 28 cm" },
        { nombre: "Grande", precio: 4999, medidas: "78 × 52 × 32 cm" }
      ],
      variantes: [
        { nombre: "Rosa", hex: "#F07060", bgColor: "#FDF0EE", imagen: "/Valijas/hollywood_rosa.webp" },
        { nombre: "Verde", hex: "#3AADA0", bgColor: "#E8F5F3", imagen: "/Valijas/hollywood_verde.webp" }
      ]
    },
    {
      id: 61,
      nombre: "Swissbrand Enstone",
      slug: "swissbrand-enstone",
      categoria: "valijas",
      precio: 2999,
      material: "Polipropileno",
      cuerpo: "Fibra",
      capacidad: "Cabina / Mediano / Grande",
      tallas: [
        { nombre: "Cabina", precio: 2999, medidas: "55 × 38 × 23 cm" },
        { nombre: "Mediano", precio: 3999, medidas: "68 × 45 × 28 cm" },
        { nombre: "Grande", precio: 4999, medidas: "78 × 52 × 32 cm" }
      ],
      variantes: [
        { nombre: "Blanco", hex: "#E8E8E6", bgColor: "#F5F5F5", imagen: "/Valijas/enstone.webp" }
      ]
    },
    {
      id: 20,
      nombre: "Zenit City S",
      slug: "zenit-city-s",
      categoria: "valijas",
      precio: 12500,
      material: "ABS Reforzado",
      cuerpo: "Fibra",
      capacidad: "Cabina",
      bgColor: "#F0E8E4",
      colores: [
        { nombre: "Negro", hex: "#0A0A0A" },
        { nombre: "Gris", hex: "#888880" },
        { nombre: "Terracota", hex: "#C8412A" }
      ]
    },
    {
      id: 21,
      nombre: "Valija Zenit Pro M",
      slug: "valija-zenit-pro-m",
      categoria: "valijas",
      precio: 15200,
      material: "Aluminio Reforzado",
      cuerpo: "Fibra",
      capacidad: "65L",
      bgColor: "#EDE8E4",
      colores: [
        { nombre: "Gris claro", hex: "#D4CFC9" },
        { nombre: "Negro", hex: "#0A0A0A" }
      ]
    },
    {
      id: 22,
      nombre: "Slim Carry-On",
      slug: "slim-carry-on",
      categoria: "valijas",
      precio: 9800,
      material: "Policarbonato",
      cuerpo: "Fibra",
      capacidad: "Cabina",
      bgColor: "#EAE6E0",
      colores: [
        { nombre: "Blanco roto", hex: "#F5F2ED" },
        { nombre: "Terracota", hex: "#C8412A" },
        { nombre: "Negro", hex: "#0A0A0A" }
      ]
    },
    {
      id: 23,
      nombre: "Zenit Soft M",
      slug: "zenit-soft-m",
      categoria: "valijas",
      precio: 4200,
      material: "Poliéster 1680D",
      cuerpo: "Tela",
      capacidad: "Mediano / Grande",
      tallas: [
        { nombre: "Mediano", precio: 4200, medidas: "68 × 44 × 27 cm" },
        { nombre: "Grande", precio: 5100, medidas: "78 × 50 × 30 cm" }
      ],
      bgColor: "#EAE6E0",
      colores: [
        { nombre: "Negro", hex: "#0A0A0A" },
        { nombre: "Gris", hex: "#888880" },
        { nombre: "Terracota", hex: "#C8412A" }
      ]
    }
  ],
  mochilas: [
    {
      id: 30,
      nombre: "Backpack Pro 16\"",
      slug: "backpack-pro-16",
      categoria: "mochilas",
      precio: 9800,
      material: "Cordura 1000D",
      capacidad: "32L",
      bgColor: "#EAEAE6",
      colores: [
        { nombre: "Negro", hex: "#0A0A0A" },
        { nombre: "Charcoal", hex: "#3D3D3D" }
      ]
    },
    {
      id: 31,
      nombre: "Urban Slim Pack",
      slug: "urban-slim-pack",
      categoria: "mochilas",
      precio: 5400,
      material: "Nylon Ripstop",
      capacidad: "18L",
      bgColor: "#E8E8E4",
      colores: [
        { nombre: "Charcoal", hex: "#3D3D3D" },
        { nombre: "Verde", hex: "#4A6741" }
      ]
    }
  ],
  accesorios: [
    {
      id: 40,
      nombre: "Porta Pasaporte Luxe",
      slug: "porta-pasaporte-luxe",
      categoria: "accesorios",
      precio: 2450,
      material: "Cuero Vegano",
      capacidad: null,
      bgColor: "#F5EBE0",
      colores: [
        { nombre: "Negro", hex: "#0A0A0A" },
        { nombre: "Camel", hex: "#A0765A" }
      ]
    }
  ],
  camping: []
}

export const categorias = [
  {
    slug: "valijas",
    nombre: "Valijas",
    descripcion: "Resistencia y elegancia en cada kilómetro recorrido.",
    bgColor: "#C8412A",
    textColor: "#FFFFFF",
    tamaño: "grande"
  },
  {
    slug: "termos",
    nombre: "Termos",
    descripcion: "Tecnología de aislamiento superior para tus bebidas favoritas.",
    bgColor: "#0A0A0A",
    textColor: "#FFFFFF",
    tamaño: "grande"
  },
  {
    slug: "mochilas",
    nombre: "Mochilas",
    descripcion: "Versatilidad urbana.",
    bgColor: "#FFFFFF",
    textColor: "#0A0A0A",
    tamaño: "pequeño"
  },
  {
    slug: "accesorios",
    nombre: "Accesorios",
    descripcion: "Detalles esenciales.",
    bgColor: "#FFFFFF",
    textColor: "#0A0A0A",
    tamaño: "pequeño"
  },
  {
    slug: "camping",
    nombre: "Camping",
    descripcion: "Equipamiento outdoor.",
    bgColor: "#FFFFFF",
    textColor: "#0A0A0A",
    tamaño: "pequeño"
  }
]
