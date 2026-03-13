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
          <h1 className={styles.heroTitle}>Gotas para tu bienestar</h1>
          <p className={styles.heroSubtitle}>
            Alivio del estrés, meditación y cuidado personal. Productos naturales
            para acompañarte en el día a día.
          </p>
          <Link href="/productos" className={styles.heroCta}>
            Ver productos
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
              <p>Formulaciones pensadas para el bienestar sin comprometer tu salud.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon} aria-hidden>⚡</span>
              <h3>Fácil de usar</h3>
              <p>Gotas listas para tomar. Ideal para integrar en tu rutina de autocuidado.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon} aria-hidden>🛡</span>
              <h3>Calidad y confianza</h3>
              <p>Productos elaborados con estándares de calidad y trazabilidad.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Productos destacados</h2>
          <div className={styles.featuredGrid}>
            {destacados.map((p) => (
              <ProductCard key={p.id} producto={p} featured />
            ))}
          </div>
          <div className={styles.ctaWrap}>
            <Link href="/productos" className={styles.ctaSecondary}>
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
