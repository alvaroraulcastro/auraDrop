import type { Metadata } from "next";
import { Button } from "antd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto via WhatsApp para realizar pedidos o resolver dudas sobre nuestros productos.",
};

export default function ContactoPage() {
  const whatsappUrl = "https://wa.me/56946673091";

  return (
    <div className={styles.wrap}>
      <h1>Contacto</h1>
      <p className={styles.lead}>
        Para consultas y pedidos, escríbenos directamente por WhatsApp.
        Responderemos lo antes posible.
      </p>

      <div className={styles.whatsappCard}>
        <p>
          <strong>WhatsApp:</strong> +56 9 4667 3091
        </p>
        <Button type="primary" size="large" href={whatsappUrl} target="_blank">
          Abrir WhatsApp
        </Button>
      </div>

      <p className={styles.info}>
        No contamos con tienda física. Solo entregas mediante coordinación por
        WhatsApp.
      </p>
    </div>
  );
}
