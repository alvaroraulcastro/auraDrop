import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Consejos de meditación, respiración y cuidado personal para acompañar el uso de nuestras gotas.",
};

const recursos = [
  {
    title: "Respiración consciente",
    content:
      "Dedica 5 minutos al día a respirar de forma lenta y profunda. Inspira por la nariz contando hasta 4, mantén el aire 4 segundos y espira por la boca contando hasta 6. Repite varias veces.",
  },
  {
    title: "Meditación breve",
    content:
      "Siéntate en un lugar tranquilo, cierra los ojos y centra la atención en tu respiración o en un sonido. Cuando la mente se distraiga, vuelve con suavidad al punto de atención. Empieza con 5-10 minutos.",
  },
  {
    title: "Rutina de noche",
    content:
      "Una hora antes de dormir, reduce pantallas y luces fuertes. Puedes tomar tus gotas de sueño, leer algo ligero o hacer estiramientos suaves para preparar el cuerpo para el descanso.",
  },
  {
    title: "Pausas activas",
    content:
      "Durante el día, programa pausas cortas: levántate, estira el cuerpo, bebe agua y, si puedes, sal al exterior unos minutos. Ayuda a bajar el estrés acumulado.",
  },
];

export default function RecursosPage() {
  return (
    <div className={styles.wrap}>
      <h1>Recursos</h1>
      <p className={styles.lead}>
        Pequeñas prácticas de meditación y cuidado personal que pueden
        acompañar el uso de nuestras gotas y mejorar tu bienestar.
      </p>
      <div className={styles.grid}>
        {recursos.map((r, i) => (
          <article className={styles.card} key={i}>
            <h2>{r.title}</h2>
            <p>{r.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
