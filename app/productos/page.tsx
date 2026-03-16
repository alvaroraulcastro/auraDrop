import type { Metadata } from "next";
import { ProductosClient } from "./ProductosClient";

export const metadata: Metadata = {
  title: "Catálogo de Productos CBD",
  description:
    "Encuentra los mejores aceites de CBD para masajes, alivio del estrés y bienestar natural en Chile. Calidad y pureza garantizada.",
  keywords: [
    "comprar CBD Chile",
    "aceite de CBD para masaje",
    "productos naturales bienestar",
    "cannabis medicinal",
    "relajación muscular",
  ],
  openGraph: {
    title: "Catálogo de Productos CBD | auraDrop",
    description:
      "Explora nuestra selección de aceites naturales de CBD en Chile para tu bienestar diario.",
  },
};

export default function ProductosPage() {
  return <ProductosClient />;
}
