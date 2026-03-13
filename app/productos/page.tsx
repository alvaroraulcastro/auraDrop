"use client";

import { useState, useMemo } from "react";
import { Typography, Row, Col, Select, Space } from "antd";
import { productos, CATEGORIAS, type Categoria } from "@/lib/data/productos";
import { ProductCard } from "@/components/product/ProductCard";
import styles from "./page.module.css";

const { Title } = Typography;

export default function ProductosPage() {
  const [categoria, setCategoria] = useState<Categoria | "todas">("todas");
  const [orden, setOrden] = useState<"nombre" | "precio-asc" | "precio-desc">("nombre");

  const list = useMemo(() => {
    let list = categoria === "todas" ? [...productos] : productos.filter((p) => p.categoria === categoria);
    if (orden === "nombre") list.sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (orden === "precio-asc") list.sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") list.sort((a, b) => b.precio - a.precio);
    return list;
  }, [categoria, orden]);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <Title level={1}>Productos</Title>
        <p className={styles.subtitle}>
          Gotas para estrés, meditación y cuidado personal.
        </p>
        <Space wrap size="middle" className={styles.filters}>
          <Select
            value={categoria}
            onChange={(v) => setCategoria(v as Categoria | "todas")}
            style={{ width: 180 }}
            options={[
              { value: "todas", label: "Todas las categorías" },
              ...CATEGORIAS.map((c) => ({ value: c.value, label: c.label })),
            ]}
          />
          <Select
            value={orden}
            onChange={(v) => setOrden(v)}
            style={{ width: 180 }}
            options={[
              { value: "nombre", label: "Por nombre" },
              { value: "precio-asc", label: "Precio: menor a mayor" },
              { value: "precio-desc", label: "Precio: mayor a menor" },
            ]}
          />
        </Space>
      </div>
      <Row gutter={[24, 24]}>
        {list.map((p) => (
          <Col xs={24} sm={12} lg={8} key={p.id}>
            <ProductCard producto={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
