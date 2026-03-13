import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisa tu carrito y completa tu solicitud de pedido en auraDrop.",
};

export default function CarritoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
