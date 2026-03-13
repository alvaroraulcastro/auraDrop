import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conoce auraDrop. Nuestra misión es ofrecer gotas naturales para el estrés, la meditación y el cuidado personal.",
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
