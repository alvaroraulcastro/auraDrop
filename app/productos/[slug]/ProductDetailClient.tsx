"use client";

import { Button, InputNumber } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useCart } from "@/lib/context/CartContext";
import type { Producto } from "@/lib/data/productos";
import styles from "./ProductDetailClient.module.css";

interface Props {
  producto: Producto;
}

export function ProductDetailClient({ producto }: Props) {
  const [cantidad, setCantidad] = useState(1);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(producto, cantidad);
  };

  return (
    <div className={styles.actions}>
      <InputNumber
        min={1}
        max={10}
        value={cantidad}
        onChange={(v) => setCantidad(v ?? 1)}
        size="large"
      />
      <Button
        type="primary"
        size="large"
        icon={<ShoppingCartOutlined />}
        onClick={handleAdd}
      >
        Añadir al carrito
      </Button>
    </div>
  );
}
