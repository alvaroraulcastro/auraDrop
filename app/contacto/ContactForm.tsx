"use client";

import { Form, Input, Button, message } from "antd";
import { useState } from "react";

const { TextArea } = Input;

interface FormValues {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: values.nombre,
          email: values.email,
          asunto: values.asunto,
          mensaje: values.mensaje,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }
      message.success("Mensaje enviado. Te responderemos pronto.");
      form.resetFields();
    } catch (e) {
      message.error(
        e instanceof Error ? e.message : "Error al enviar. Inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item
        name="nombre"
        label="Nombre"
        rules={[{ required: true, message: "Introduce tu nombre" }]}
      >
        <Input placeholder="Tu nombre" size="large" />
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
        name="asunto"
        label="Asunto"
        rules={[{ required: true, message: "Introduce el asunto" }]}
      >
        <Input placeholder="Ej: Consulta sobre pedido" size="large" />
      </Form.Item>
      <Form.Item
        name="mensaje"
        label="Mensaje"
        rules={[{ required: true, message: "Escribe tu mensaje" }]}
      >
        <TextArea
          rows={5}
          placeholder="Tu mensaje..."
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" loading={loading}>
          Enviar mensaje
        </Button>
      </Form.Item>
    </Form>
  );
}
