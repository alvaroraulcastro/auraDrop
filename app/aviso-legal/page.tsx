import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal y condiciones de uso del sitio web auraDrop.",
};

export default function AvisoLegalPage() {
  return (
    <div className={styles.wrap}>
      <h1>Aviso legal</h1>
      <p>
        Este aviso legal regula el uso del sitio web auraDrop (en adelante, el
        sitio). El acceso y la utilización del sitio implican la aceptación de
        las presentes condiciones.
      </p>
      <h2>Identificación del titular</h2>
      <p>
        El sitio es operado por el titular del proyecto auraDrop. Para
        cuestiones relacionadas con el sitio o los productos, puede utilizarse
        el formulario de contacto disponible en la web.
      </p>
      <h2>Condiciones de uso</h2>
      <p>
        El usuario se compromete a hacer un uso adecuado de los contenidos y
        servicios ofrecidos a través del sitio, y a no emplearlos para
        actividades ilícitas o contrarias a la buena fe. Los productos ofrecidos
        tienen finalidad informativa y de venta en el marco de la normativa
        aplicable.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los contenidos del sitio (textos, imágenes, logotipos, diseño) están
        protegidos por la legislación aplicable en materia de propiedad
        intelectual. Queda prohibida su reproducción o distribución sin
        autorización previa.
      </p>
      <h2>Modificaciones</h2>
      <p>
        El titular se reserva el derecho de modificar el presente aviso legal y
        los contenidos del sitio cuando lo considere oportuno. Se recomienda
        revisar esta página periódicamente.
      </p>
    </div>
  );
}
