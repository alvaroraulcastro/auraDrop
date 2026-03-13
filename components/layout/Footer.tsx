"use client";

import { Layout, Row, Col } from "antd";
import Link from "next/link";
import styles from "./Footer.module.css";

const { Footer: AntFooter } = Layout;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className={styles.footer}>
      <div className={styles.content}>
        <Row gutter={[32, 24]}>
          <Col xs={24} sm={12} md={8}>
            <h4>auraDrop</h4>
            <p>Gotas para estrés, meditación y cuidado personal.</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4>Enlaces</h4>
            <ul>
              <li><Link href="/productos">Productos</Link></li>
              <li><Link href="/recursos">Recursos</Link></li>
              <li><Link href="/sobre-nosotros">Quiénes somos</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/aviso-legal">Aviso legal</Link></li>
              <li><Link href="/privacidad">Privacidad</Link></li>
            </ul>
          </Col>
        </Row>
        <div className={styles.copyright}>
          © {currentYear} auraDrop. Todos los derechos reservados.
        </div>
      </div>
    </AntFooter>
  );
}
