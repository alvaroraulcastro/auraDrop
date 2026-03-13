"use client";

import { Layout, Menu, Button, Badge } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "@/lib/context/CartContext";
import styles from "./Header.module.css";

const { Header: AntHeader } = Layout;

const items = [
  { key: "/", label: <Link href="/">Inicio</Link> },
  { key: "/productos", label: <Link href="/productos">Productos</Link> },
  { key: "/recursos", label: <Link href="/recursos">Recursos</Link> },
  { key: "/sobre-nosotros", label: <Link href="/sobre-nosotros">Quiénes somos</Link> },
  { key: "/contacto", label: <Link href="/contacto">Contacto</Link> },
];

export function Header() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

  const selectedKey = items.find((i) => i.key === pathname)?.key ?? pathname?.split("/")[1] ? `/${pathname?.split("/")[1]}` : "/";

  return (
    <AntHeader className={styles.header}>
      <Link href="/" className={styles.logo}>
        auraDrop
      </Link>
      <Menu
        mode="horizontal"
        selectedKeys={[selectedKey]}
        items={items}
        className={styles.menu}
      />
      <div className={styles.actions}>
        <Badge count={totalItems} size="small">
          <Button
            type="text"
            icon={<ShoppingCartOutlined style={{ fontSize: 20 }} />}
            onClick={openCart}
            aria-label="Ver carrito"
          />
        </Badge>
      </div>
    </AntHeader>
  );
}
