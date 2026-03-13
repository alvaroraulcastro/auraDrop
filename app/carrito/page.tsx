"use client";

import { Typography, Table, Button, InputNumber, Form, Input, Space } from "antd";
import { useCart } from "@/lib/context/CartContext";
import { formatearPrecio } from "@/lib/data/productos";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { message } from "antd";
import styles from "./page.module.css";

const { Title, Text } = Typography;

export default function CarritoPage() {
  const { items, removeItem, updateQuantity } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const total = items.reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0);

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

  const onFinish = async (values: Record<string, string>) => {
    setLoading(true);
    try {
      const res = await fetch("/api/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: values.nombre,
          email: values.email,
          telefono: values.telefono,
          direccion: values.direccion,
          comentarios: values.comentarios,
          lineas: items.map((i) => ({
            nombre: i.producto.nombre,
            cantidad: i.cantidad,
            precio: i.producto.precio,
          })),
          total,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }
      message.success(
        "Solicitud enviada. Te contactaremos a la brevedad para confirmar el pedido."
      );
      form.resetFields();
      router.push("/");
    } catch (e) {
      message.error(
        e instanceof Error ? e.message : "Error al enviar. Inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className={styles.wrap}>
        <Title level={2}>Tu carrito está vacío</Title>
        <p className={styles.emptyText}>
          <Link href="/productos">Ver producto</Link> para solicitar compra.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <Title level={1}>Solicitar pedido</Title>
      <p className={styles.subtitle}>
        Revisa tu carrito y completa tus datos. Nos pondremos en contacto para
        confirmar el pedido.
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
        <Title level={4}>Datos de contacto</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            name="nombre"
            label="Nombre completo"
            rules={[{ required: true, message: "Introduce tu nombre" }]}
          >
            <Input placeholder="Nombre y apellidos" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Introduce tu email" },
              { type: "email", message: "Email no válido" },
            ]}
          >
            <Input type="email" placeholder="tu@email.com" size="large" />
          </Form.Item>
          <Form.Item
            name="telefono"
            label="Teléfono"
            rules={[{ required: true, message: "Introduce tu teléfono" }]}
          >
            <Input placeholder="+56 9 0000 0000" size="large" />
          </Form.Item>
          <Form.Item
            name="direccion"
            label="Dirección de envío"
            rules={[{ required: true, message: "Introduce la dirección" }]}
          >
            <Input.TextArea
              rows={3}
              placeholder="Calle, número, código postal, ciudad"
              size="large"
            />
          </Form.Item>
          <Form.Item name="comentarios" label="Comentarios (opcional)">
            <Input.TextArea rows={2} placeholder="Indicaciones o notas..." />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" size="large" loading={loading}>
              Enviar solicitud de pedido
            </Button>
            <Link href="/productos">
              <Button size="large">Seguir comprando</Button>
            </Link>
          </Space>
        </Form>
      </div>
    </div>
  );
}
