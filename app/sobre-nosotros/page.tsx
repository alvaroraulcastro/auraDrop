import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Quiénes Somos — Nuestra Misión",
  description:
    "Descubre la historia de auraDrop. Nuestra misión es brindar bienestar natural a través de aceites de CBD de alta calidad en Chile para el estrés y la meditación.",
  keywords: [
    "historia auraDrop",
    "CBD natural Chile",
    "bienestar emocional",
    "misión auraDrop",
  ],
  openGraph: {
    title: "Quiénes Somos — Nuestra Misión | auraDrop",
    description:
      "Conoce nuestra pasión por el bienestar natural y el alivio del estrés con productos de calidad.",
  },
};

export default function SobreNosotrosPage() {
  return (
    <div className={styles.wrap}>
      <h1>Quiénes somos</h1>
      <p className={styles.lead}>
        En auraDrop creemos en el poder de lo natural para acompañar tu bienestar
        emocional y físico.
      </p>

      <div className={styles.cards}>
        <section className={styles.card}>
          <h2>Nuestra misión</h2>
          <p>
            Ofrecer productos en formato de gotas que faciliten el alivio del
            estrés, la práctica de la meditación y el cuidado personal, con
            fórmulas accesibles y fáciles de integrar en el día a día.
          </p>
        </section>
        <section className={styles.card}>
          <h2>Nuestros valores</h2>
          <p>
            Calidad, transparencia y respeto por el medio ambiente. Trabajamos
            con ingredientes seleccionados y procesos que priorizan la salud y
            la sostenibilidad.
          </p>
        </section>
      </div>

      <div className={styles.contactCta}>
        <p>
          ¿Tienes preguntas? Escríbenos en la sección{" "}
          <a href="/contacto">Contacto</a>.
        </p>
      </div>
    </div>
  );
}
