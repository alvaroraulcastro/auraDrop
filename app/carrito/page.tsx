"use client";

import { Typography, Table, Button, InputNumber, Space } from "antd";
import { useCart } from "@/lib/context/CartContext";
import { formatearPrecio } from "@/lib/data/productos";
import Link from "next/link";
import styles from "./page.module.css";

const { Title, Text } = Typography;

export default function CarritoPage() {
  const { items, removeItem, updateQuantity } = useCart();

  const total = items.reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0);

  const whatsappMessage = encodeURIComponent(
    `Hola, quiero hacer un pedido:\n\n${items
      .map((i) => `${i.producto.nombre} x${i.cantidad} - ${formatearPrecio(i.producto.precio * i.cantidad, i.producto.moneda)}`)
      .join("\n")}\n\nTotal: ${formatearPrecio(total, "CLP")}\n\nPor favor, indícame cómo proceder con el envío.`
  );
  const whatsappUrl = `https://wa.me/56946673091?text=${whatsappMessage}`;

  const columns = [
    {
      title: "Producto",
      dataIndex: "nombre",
      key: "nombre",
      render: (_: unknown, record: { producto: { nombre: string } }) => record.producto.nombre,
    },
    {
      title: "Precio unit.",
      key: "precio",
      width: 100,
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
      title: "Subtotal",
      key: "subtotal",
      width: 100,
      render: (_: unknown, record: { producto: { precio: number; moneda?: string }; cantidad: number }) =>
        formatearPrecio(record.producto.precio * record.cantidad, record.producto.moneda),
    },
    {
      title: "",
      key: "actions",
      width: 80,
      render: (_: unknown, record: { producto: { id: string } }) => (
        <Button type="link" danger size="small" onClick={() => removeItem(record.producto.id)}>
          Quitar
        </Button>
      ),
    },
  ];

  const dataSource = items.map((item) => ({
    key: item.producto.id,
    nombre: item.producto.nombre,
    producto: item.producto,
    cantidad: item.cantidad,
  }));

  if (items.length === 0) {
    return (
      <div className={styles.wrap}>
        <Title level={2}>Tu carrito está vacío</Title>
        <p className={styles.emptyText}>
          <Link href="/productos">Ver producto</Link> para solicitar compra por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <Title level={1}>Solicitar pedido por WhatsApp</Title>
      <p className={styles.subtitle}>
        Revisa tu carrito y haz clic en "Solicitar por WhatsApp" para enviarnos
        tu pedido. Nos pondremos en contacto para confirmar y coordinar el envío.
      </p>
      <p className={styles.note}>
        Envíos por Bluexpress (coste de envío no incluido). Si estás en Santiago,
        también podemos coordinar entrega dentro del Metro. No contamos con tienda física.
      </p>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className={styles.table}
      />

      <div className={styles.total}>
        <Text strong>Total: {formatearPrecio(total, "CLP")}</Text>
      </div>

      <div className={styles.formSection}>
        <Title level={4}>Solicitar pedido</Title>
        <p>
          Haz clic en el botón para abrir WhatsApp y enviarnos tu pedido con el
          resumen incluido.
        </p>
        <Space>
          <Button type="primary" size="large" href={whatsappUrl} target="_blank">
            Solicitar por WhatsApp
          </Button>
          <Link href="/productos">
            <Button size="large">Seguir comprando</Button>
          </Link>
        </Space>
      </div>
    </div>
  );
}
