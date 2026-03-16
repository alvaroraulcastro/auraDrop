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
    default: "auraDrop — Aceite CBD para estrés, meditación y bienestar en Chile",
    template: "%s | auraDrop",
  },
  description:
    "Especialistas en aceite de CBD para alivio del estrés, meditación y cuidado personal en Chile. Productos naturales para tu bienestar emocional y físico.",
  keywords: [
    "CBD Chile",
    "aceite de CBD",
    "bienestar natural",
    "estrés",
    "meditación",
    "cuidado personal",
    "aceite para masajes",
    "relajación",
    "salud natural",
  ],
  authors: [{ name: "auraDrop" }],
  creator: "auraDrop",
  publisher: "auraDrop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "auraDrop",
    title: "auraDrop — Aceite CBD para estrés, meditación y bienestar en Chile",
    description:
      "Descubre el poder del CBD natural para el alivio del estrés y la meditación. Aceites de calidad para masajes y bienestar en Chile.",
    images: [
      {
        url: "/imagenes/aceiteCbdMasaje.jpeg",
        width: 1200,
        height: 630,
        alt: "auraDrop - Aceite CBD para bienestar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "auraDrop — Aceite CBD para estrés y meditación",
    description:
      "Aceites naturales de CBD en Chile para tu bienestar diario y alivio del estrés.",
    images: ["/imagenes/aceiteCbdMasaje.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
