import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "./AntdRegistry";
import { CartProvider } from "@/lib/context/CartContext";
import { MainLayout } from "@/components/layout/MainLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aura-drop.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "auraDrop — Gotas para estrés, meditación y cuidado personal",
    template: "%s | auraDrop",
  },
  description:
    "Web enfocada en ventas de gotas para alivio del estrés, meditación y cuidado personal.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "auraDrop",
    title: "auraDrop — Gotas para estrés, meditación y cuidado personal",
    description:
      "Gotas naturales para alivio del estrés, meditación y cuidado personal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <CartProvider>
            <MainLayout>{children}</MainLayout>
          </CartProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
