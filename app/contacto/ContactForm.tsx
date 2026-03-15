"use client";

import { Button } from "antd";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const whatsappUrl = "https://wa.me/56946673091";

  return (
    <div className={styles.wrapper}>
      <p>
        El formulario de contacto está deshabilitado por ahora. Si quieres hacer
        un pedido o tienes alguna duda, escríbenos directamente por WhatsApp.
      </p>

      <div className={styles.whatsappCard}>
        <p>
          <strong>WhatsApp:</strong> +56 9 4667 3091
        </p>
        <Button type="primary" size="large" href={whatsappUrl} target="_blank">
          Abrir WhatsApp
        </Button>
      </div>
    </div>
  );
}
