"use client";

import { Card, Button, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import type { Producto } from "@/lib/data/productos";
import { formatearPrecio } from "@/lib/data/productos";
import { useCart } from "@/lib/context/CartContext";
import styles from "./ProductCard.module.css";

const { Title, Paragraph } = Typography;

interface ProductCardProps {
  producto: Producto;
  featured?: boolean;
}

export function ProductCard({ producto, featured }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card
      hoverable
      className={featured ? styles.cardFeatured : styles.card}
      cover={
        <div className={styles.imageWrap}>
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={400}
            height={400}
            className={styles.image}
            unoptimized
          />
        </div>
      }
      actions={
        featured
          ? [
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                key="cart"
                onClick={() => addItem(producto)}
              >
                Añadir
              </Button>,
              <Link key="link" href={`/productos/${producto.slug}`}>
                <Button>Ver más</Button>
              </Link>,
            ]
          : undefined
      }
    >
      <Link href={`/productos/${producto.slug}`}>
        <Title level={5} className={styles.title}>
          {producto.nombre}
        </Title>
        <Paragraph type="secondary" className={styles.desc} ellipsis={{ rows: 2 }}>
          {producto.descripcionCorta}
        </Paragraph>
      </Link>
      <div className={styles.price}>
        <Typography.Text strong>
          {formatearPrecio(producto.precio, producto.moneda)}
        </Typography.Text>
      </div>
      {!featured && (
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={() => addItem(producto)}
          className={styles.addBtn}
        >
          Añadir al carrito
        </Button>
      )}
    </Card>
  );
}
