import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad y protección de datos de auraDrop.",
};

export default function PrivacidadPage() {
  return (
    <div className={styles.wrap}>
      <h1>Política de privacidad</h1>
      <p>
        En auraDrop nos comprometemos a proteger tu privacidad. Esta política
        describe cómo recogemos, usamos y protegemos tu información personal.
      </p>
      <h2>Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos personales es el titular del
        proyecto auraDrop. Puedes contactarnos a través del formulario de
        contacto del sitio.
      </p>
      <h2>Datos que recogemos</h2>
      <p>
        Podemos recoger datos que nos facilites al contactar (nombre, email,
        mensaje) o al realizar una solicitud de pedido (datos de contacto y
        envío). El sitio puede utilizar cookies técnicas necesarias para su
        funcionamiento.
      </p>
      <h2>Finalidad y legitimación</h2>
      <p>
        Los datos se utilizan para responder a tus consultas, gestionar pedidos
        y mejorar nuestros servicios. La base legal es tu consentimiento o la
        ejecución de medidas precontractuales o contractuales.
      </p>
      <h2>Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión,
        limitación del tratamiento, portabilidad y oposición contactando con
        nosotros. También tienes derecho a reclamar ante la autoridad de
        control competente.
      </p>
      <h2>Seguridad y conservación</h2>
      <p>
        Aplicamos medidas técnicas y organizativas para proteger tus datos. Los
        conservaremos durante el tiempo necesario para cumplir la finalidad
        indicada y las obligaciones legales.
      </p>
    </div>
  );
}
