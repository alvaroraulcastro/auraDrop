/**
 * Catálogo de productos — auraDrop
 * Por ahora un único producto; se añadirán más más adelante.
 */

export type Categoria = "cuidado-personal";

export interface Producto {
  id: string;
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcion: string;
  categoria: Categoria;
  precio: number;
  moneda: "CLP";
  imagen: string;
  uso?: string;
  cepa?: string;
  especificaciones?: string[];
  beneficios?: string[];
  destacado?: boolean;
}

/** Producto actual: aceite CBD para masaje, 10 ml */
export const productos: Producto[] = [
  {
    id: "1",
    slug: "aceite-cbd-masaje-10ml",
    nombre: "Aceite CBD para masaje",
    descripcionCorta: "Aceite de CBD para masaje, 10 ml. Cepa Y griega de Medical Seeds.",
    descripcion:
      "Aceite de CBD de uso tópico (10 ml) formulado para masajes terapéuticos y cuidado de la piel. Extraído de la cepa Y griega de Medical Seeds y diseñado para apoyar una sensación de alivio muscular localizada y bienestar general. Uso externo únicamente.",
    categoria: "cuidado-personal",
    precio: 9000,
    moneda: "CLP",
    imagen: "/imagenes/aceiteCbdMasaje.jpeg",
    cepa: "Y griega (Medical Seeds)",
    uso:
      "Aplicar unas gotas sobre la zona a masajear y masajear suavemente con movimientos circulares. Uso externo únicamente. No ingerir. Evitar contacto con ojos y mucosas. Conservar en lugar fresco y seco, protegido de la luz directa.",
    especificaciones: [
      "Contenido: 10 ml",
      "Concentración aproximada de CBD: 10%",
      "Formato: aceite de uso tópico",
      "Libre de THC detectable (<0.2%)",
    ],
    beneficios: [
      "Apoya el alivio de la tensión muscular localizada",
      "Contribuye a una sensación de relajación y bienestar durante el masaje",
      "Complementa rutinas de autocuidado y terapias de masaje",
    ],
    destacado: true,
  },
];

export const CATEGORIAS: { value: Categoria; label: string }[] = [
  { value: "cuidado-personal", label: "Cuidado personal" },
];

export function getProductoBySlug(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}

export function getProductosDestacados(): Producto[] {
  return productos.filter((p) => p.destacado);
}

export function getProductosByCategoria(categoria: Categoria): Producto[] {
  return productos.filter((p) => p.categoria === categoria);
}

/** Formatea el precio en pesos chilenos */
export function formatearPrecio(precio: number, moneda: string = "CLP"): string {
  if (moneda === "CLP") {
    return `$${precio.toLocaleString("es-CL")}`;
  }
  return `${precio} ${moneda}`;
}
