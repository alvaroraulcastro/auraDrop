import { notFound } from "next/navigation";
import Image from "next/image";
import { Carousel } from "antd";
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
    keywords: [
      "CBD",
      "aceite de masaje",
      "aceite medicinal",
      "terapia de masaje",
      "bienestar",
      "relajación",
    ],
    openGraph: {
      title: `${producto.nombre} | auraDrop`,
      description: producto.descripcionCorta,
      images: [
        "/imagenes/aceiteCbdMasaje.jpeg",
        "/imagenes/aceiteCbdMasaje1.jpeg",
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${producto.nombre} | auraDrop`,
      description: producto.descripcionCorta,
      images: [
        "/imagenes/aceiteCbdMasaje.jpeg",
        "/imagenes/aceiteCbdMasaje1.jpeg",
      ],
    },
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);
  if (!producto) notFound();

  const imagenes: string[] =
    producto.slug === "aceite-cbd-masaje-10ml"
      ? [
          "/imagenes/aceiteCbdMasaje.jpeg",
          "/imagenes/aceiteCbdMasaje1.jpeg",
        ]
      : [producto.imagen];

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <Carousel dots autoplay>
            {imagenes.map((src, index) => (
              <div key={index} className={styles.carouselItem}>
                <Image
                  src={src}
                  alt={`${producto.nombre} ${index + 1}`}
                  width={500}
                  height={500}
                  className={styles.image}
                  priority={index === 0}
                  unoptimized
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{producto.nombre}</h1>
          <p className={styles.price}>{formatearPrecio(producto.precio, producto.moneda)}</p>
          {producto.cepa && (
            <p className={styles.cepa}><strong>Cepa:</strong> {producto.cepa}</p>
          )}
          <p className={styles.descCorta}>{producto.descripcionCorta}</p>
          <p className={styles.desc}>{producto.descripcion}</p>
          {producto.especificaciones && (
            <section className={styles.especificaciones}>
              <h2>Especificaciones medicinales</h2>
              <ul>
                {producto.especificaciones.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          {producto.beneficios && (
            <section className={styles.beneficios}>
              <h2>Uso terapéutico y beneficios</h2>
              <ul>
                {producto.beneficios.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
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
