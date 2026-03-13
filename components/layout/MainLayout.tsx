"use client";

import { Layout } from "antd";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import styles from "./MainLayout.module.css";

const { Content } = Layout;

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content className={styles.content}>{children}</Content>
      <Footer />
      <CartDrawer />
    </Layout>
  );
}
