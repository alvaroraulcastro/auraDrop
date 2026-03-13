import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | auraDrop",
  description:
    "Catálogo de gotas para estrés, meditación y cuidado personal. Descubre Calma, Foco, Sueño reparador y más.",
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
