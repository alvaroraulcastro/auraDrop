/**
 * Catálogo de productos (gotas) para auraDrop
 */

export type Categoria = "estres" | "meditacion" | "cuidado-personal";

export interface Producto {
  id: string;
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcion: string;
  categoria: Categoria;
  precio: number;
  imagen: string;
  uso?: string;
  destacado?: boolean;
}

export const CATEGORIAS: { value: Categoria; label: string }[] = [
  { value: "estres", label: "Estrés" },
  { value: "meditacion", label: "Meditación" },
  { value: "cuidado-personal", label: "Cuidado personal" },
];

export const productos: Producto[] = [
  {
    id: "1",
    slug: "calma-gotas",
    nombre: "Calma",
    descripcionCorta: "Gotas para aliviar el estrés y la ansiedad del día a día.",
    descripcion:
      "Calma está formulada con ingredientes naturales que ayudan a reducir la tensión y favorecer un estado de relax. Ideal para tomar antes de situaciones que generen nerviosismo o por la noche para conciliar el sueño.",
    categoria: "estres",
    precio: 18.9,
    imagen: "https://placehold.co/400x400/e8f5e9/2e7d32?text=Calma",
    uso: "Tomar 10-15 gotas bajo la lengua 2 veces al día, o según indicación profesional.",
    destacado: true,
  },
  {
    id: "2",
    slug: "foco-gotas",
    nombre: "Foco",
    descripcionCorta: "Ayuda a mantener la concentración y la claridad mental.",
    descripcion:
      "Foco está pensada para momentos que requieren atención sostenida. Sus componentes favorecen la concentración sin generar nerviosismo, ideal para trabajo, estudio o meditación.",
    categoria: "meditacion",
    precio: 19.5,
    imagen: "https://placehold.co/400x400/e3f2fd/1565c0?text=Foco",
    uso: "10 gotas por la mañana o antes de una sesión de meditación. No superar la dosis recomendada.",
    destacado: true,
  },
  {
    id: "3",
    slug: "sueño-reparador",
    nombre: "Sueño reparador",
    descripcionCorta: "Gotas para dormir mejor y despertar descansado.",
    descripcion:
      "Sueño reparador combina ingredientes que favorecen la relajación y un descanso más profundo. Indicada para personas con dificultad para conciliar el sueño o despertares nocturnos.",
    categoria: "cuidado-personal",
    precio: 21.0,
    imagen: "https://placehold.co/400x400/f3e5f5/7b1fa2?text=Sueño",
    uso: "15-20 gotas 30 minutos antes de acostarse, en un poco de agua o bajo la lengua.",
    destacado: true,
  },
  {
    id: "4",
    slug: "equilibrio",
    nombre: "Equilibrio",
    descripcionCorta: "Balance emocional y bienestar general.",
    descripcion:
      "Equilibrio está diseñada para apoyar el bienestar emocional y el equilibrio en épocas de cambio o mayor demanda. Acompaña procesos de meditación y autocuidado.",
    categoria: "cuidado-personal",
    precio: 20.0,
    imagen: "https://placehold.co/400x400/fff8e1/ff8f00?text=Equilibrio",
    uso: "10 gotas 1-2 veces al día. Puede tomarse de forma continuada según necesidad.",
    destacado: false,
  },
  {
    id: "5",
    slug: "respira",
    nombre: "Respira",
    descripcionCorta: "Para acompañar la práctica de respiración y meditación.",
    descripcion:
      "Respira potencia los beneficios de la respiración consciente y la meditación. Úsala antes o después de tu práctica para profundizar en la calma y la presencia.",
    categoria: "meditacion",
    precio: 17.5,
    imagen: "https://placehold.co/400x400/e0f7fa/0097a7?text=Respira",
    uso: "5-10 gotas antes de meditar o en momentos de pausa durante el día.",
    destacado: false,
  },
  {
    id: "6",
    slug: "serenidad",
    nombre: "Serenidad",
    descripcionCorta: "Reducción del estrés y la inquietud.",
    descripcion:
      "Serenidad está indicada para momentos de alta carga emocional o laboral. Ayuda a bajar el ritmo y recuperar la calma de forma natural.",
    categoria: "estres",
    precio: 18.0,
    imagen: "https://placehold.co/400x400/fce4ec/c2185b?text=Serenidad",
    uso: "10-15 gotas según necesidad, hasta 3 veces al día. No usar como sustituto del sueño.",
    destacado: false,
  },
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
