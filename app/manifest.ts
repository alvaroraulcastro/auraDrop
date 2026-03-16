import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "auraDrop — Aceite CBD para masaje y bienestar",
    short_name: "auraDrop",
    description:
      "Tienda de aceites de CBD para masajes, alivio del estrés y meditación en Chile.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6b8e23",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
