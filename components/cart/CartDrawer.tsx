"use client";

import { Drawer, Table, Button, InputNumber, Space, Typography } from "antd";
import { useCart } from "@/lib/context/CartContext";
import { formatearPrecio } from "@/lib/data/productos";
import Link from "next/link";
import styles from "./CartDrawer.module.css";

export function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity } = useCart();

  const columns = [
    {
      title: "Producto",
      dataIndex: "nombre",
      key: "nombre",
      render: (_: unknown, record: { producto: { slug: string; nombre: string } }) => (
        <Link href={`/productos/${record.producto.slug}`} onClick={closeCart}>
          {record.producto.nombre}
        </Link>
      ),
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
      width: 90,
      render: (_: unknown, record: { producto: { precio: number; moneda?: string } }) =>
        formatearPrecio(record.producto.precio, record.producto.moneda),
    },
    {
      title: "Cantidad",
      key: "cantidad",
      width: 120,
      render: (_: unknown, record: { producto: { id: string }; cantidad: number }) => (
        <InputNumber
          min={1}
          value={record.cantidad}
          onChange={(v) => updateQuantity(record.producto.id, v ?? 1)}
          size="small"
        />
      ),
    },
    {
      title: "",
      key: "actions",
      width: 80,
      render: (_: unknown, record: { producto: { id: string } }) => (
        <Button
          type="link"
          danger
          size="small"
          onClick={() => removeItem(record.producto.id)}
        >
          Quitar
        </Button>
      ),
    },
  ];

  const dataSource = items.map((item) => ({
    key: item.producto.id,
    nombre: item.producto.nombre,
    precio: item.producto.precio,
    cantidad: item.cantidad,
    producto: item.producto,
  }));

  const total = items.reduce(
    (acc, i) => acc + i.producto.precio * i.cantidad,
    0
  );

  return (
    <Drawer
      title="Tu carrito"
      placement="right"
      onClose={closeCart}
      open={isCartOpen}
      size={480}
      footer={
        items.length > 0 ? (
          <Space orientation="vertical" style={{ width: "100%" }} size="middle">
            <Typography.Text strong>
              Total: {formatearPrecio(total, "CLP")}
            </Typography.Text>
            <Link href="/carrito" onClick={closeCart}>
              <Button type="primary" block>
                Solicitar pedido
              </Button>
            </Link>
          </Space>
        ) : null
      }
    >
      {items.length === 0 ? (
        <p className={styles.empty}>El carrito está vacío.</p>
      ) : (
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          size="small"
        />
      )}
    </Drawer>
  );
}
