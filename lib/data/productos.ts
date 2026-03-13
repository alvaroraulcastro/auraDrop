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
      "Aceite de CBD para uso en masaje, formato 10 ml. Elaborado con cannabis de la cepa Y griega de Medical Seeds. Ideal para aplicar sobre la piel en zonas de tensión o como apoyo en masajes de bienestar. Uso externo únicamente.",
    categoria: "cuidado-personal",
    precio: 9000,
    moneda: "CLP",
    imagen: "https://placehold.co/400x400/e8f5e9/2e7d32?text=CBD+10ml",
    cepa: "Y griega (Medical Seeds)",
    uso:
      "Aplicar unas gotas sobre la zona a masajear y masajear suavemente con movimientos circulares. Uso externo únicamente. No ingerir. Evitar contacto con ojos y mucosas. Conservar en lugar fresco y seco, protegido de la luz directa.",
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
