import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductoBySlug, productos, formatearPrecio } from "@/lib/data/productos";
import { ProductDetailClient } from "./ProductDetailClient";
import type { Metadata } from "next";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);
  if (!producto) return { title: "Producto no encontrado | auraDrop" };
  return {
    title: `${producto.nombre} | auraDrop`,
    description: producto.descripcionCorta,
    openGraph: {
      title: `${producto.nombre} | auraDrop`,
      description: producto.descripcionCorta,
    },
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);
  if (!producto) notFound();

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={500}
            height={500}
            className={styles.image}
            priority
            unoptimized
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{producto.nombre}</h1>
          <p className={styles.price}>{formatearPrecio(producto.precio, producto.moneda)}</p>
          {producto.cepa && (
            <p className={styles.cepa}><strong>Cepa:</strong> {producto.cepa}</p>
          )}
          <p className={styles.descCorta}>{producto.descripcionCorta}</p>
          <p className={styles.desc}>{producto.descripcion}</p>
          {producto.uso && (
            <div className={styles.uso}>
              <strong>Modo de uso:</strong> {producto.uso}
            </div>
          )}
          <ProductDetailClient producto={producto} />
        </div>
      </div>
    </div>
  );
}
