import Link from "next/link";
import { getProductosDestacados } from "@/lib/data/productos";
import { ProductCard } from "@/components/product/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  const destacados = getProductosDestacados();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Aceite CBD para masaje</h1>
          <p className={styles.heroSubtitle}>
            10 ml. Cepa Y griega de Medical Seeds. Para solicitar tu compra,
            escríbenos desde la sección Contacto y te responderemos a la brevedad.
          </p>
          <Link href="/productos" className={styles.heroCta}>
            Ver producto
          </Link>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Por qué elegir auraDrop</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon} aria-hidden>♥</span>
              <h3>Ingredientes naturales</h3>
              <p>Elaborado con cannabis de calidad para uso en masaje y bienestar.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon} aria-hidden>⚡</span>
              <h3>Fácil de usar</h3>
              <p>Formato 10 ml listo para aplicar. Incluye modo de uso.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon} aria-hidden>🛡</span>
              <h3>Calidad y confianza</h3>
              <p>Cepa Y griega de Medical Seeds. Uso externo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Nuestro producto</h2>
          <div className={styles.featuredGrid}>
            {destacados.map((p) => (
              <ProductCard key={p.id} producto={p} featured />
            ))}
          </div>
          <div className={styles.ctaWrap}>
            <p className={styles.ctaText}>
              Para comprar, añade el producto al carrito y completa la solicitud, o
              escríbenos por <Link href="/contacto">Contacto</Link>. Te responderemos
              para coordinar el envío.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
