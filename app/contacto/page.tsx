import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con auraDrop. Estamos aquí para resolver tus dudas sobre nuestros productos.",
};

export default function ContactoPage() {
  return (
    <div className={styles.wrap}>
      <h1>Contacto</h1>
      <p className={styles.lead}>
        ¿Tienes alguna duda sobre nuestros productos o quieres hacer un pedido
        personalizado? Escríbenos y te responderemos lo antes posible.
      </p>
      <ContactForm />
    </div>
  );
}
