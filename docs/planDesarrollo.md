# Plan de desarrollo — auraDrop

Web enfocada en ventas de gotas para alivio del estrés, meditación y cuidado personal.

# Dominio actual
https://aura-drop.vercel.app/

---

## 1. Stack técnico

| Área | Tecnología |
|------|------------|
| Framework | **Next.js** (App Router) |
| UI | **Ant Design** |
| Hosting | **Vercel** |
| Lenguaje | TypeScript |
| Estilos | CSS Modules / Ant Design (Less variables si se personaliza tema) |

---

## 2. Fases del proyecto

### Fase 0 — Inicialización ✅
- [x] Crear proyecto Next.js con TypeScript y App Router
- [x] Instalar y configurar Ant Design (`antd`)
- [x] Configurar estructura de carpetas (`app/`, `components/`, `lib/`, `public/`)
- [x] Configurar ESLint, Prettier y `.env.example`
- [x] Repo listo para conectar con Vercel (push a `main`)

### Fase 1 — Base y diseño ✅
- [x] Layout principal (header, footer, navegación) con componentes Ant Design
- [x] Tema/estilo de marca (colores, tipografía) vía Ant Design ConfigProvider
- [x] Página de inicio con secciones: hero, beneficios, productos destacados
- [x] Páginas estáticas: Quiénes somos, Contacto, Aviso legal / Privacidad

### Fase 2 — Catálogo y producto ✅
- [x] Listado de productos (gotas) con grid/cards Ant Design
- [x] Filtros y ordenación (categoría: estrés, meditación, cuidado personal)
- [x] Página de detalle de producto (descripción, uso, precio, CTA)
- [x] Integración con datos (lib/data/productos.ts)

### Fase 3 — Carrito y checkout ✅
- [x] Carrito lateral (Drawer) y página con Table, InputNumber, Button
- [x] Resumen de pedido y formulario de datos (nombre, email, teléfono, dirección)
- [x] Formulario de solicitud de pedido (sin pasarela; confirmación por contacto)

### Fase 4 — Contenido y SEO ✅
- [x] Metadata y Open Graph por página (Next.js Metadata API)
- [x] Sitemap (`app/sitemap.ts`) y `robots.txt` (`app/robots.ts`)
- [x] Sección Recursos (meditación, respiración, cuidado personal)

### Fase 5 — Despliegue y operación ✅
- [x] Conectar repositorio Git con Vercel
- [ ] Variables de entorno en Vercel (opcional: NEXT_PUBLIC_SITE_URL)
- [ ] Dominio personalizado (si aplica)
- [ ] Monitoreo básico (Vercel Analytics opcional)

---

## 3. Estructura de carpetas sugerida

```
auraDrop/
├── app/
│   ├── layout.tsx          # Layout raíz + Ant Design ConfigProvider
│   ├── page.tsx             # Home
│   ├── globals.css
│   ├── productos/
│   │   ├── page.tsx         # Listado
│   │   └── [slug]/page.tsx  # Detalle
│   ├── contacto/page.tsx
│   └── ... (resto de rutas)
├── components/
│   ├── ui/                  # Componentes reutilizables con Ant Design
│   ├── layout/              # Header, Footer, Nav
│   └── product/             # Card, filters, etc.
├── lib/
│   ├── data/                # Datos de productos o clientes API
│   └── utils.ts
├── public/
├── docs/
│   └── planDesarrollo.md
├── next.config.js
├── package.json
└── vercel.json              # Opcional: redirects, headers
```

---

## 4. Consideraciones Vercel

- Usar **Next.js** en modo estándar (no `output: 'export'` salvo que sea 100 % estático) para aprovechar SSR/API routes si se necesitan.
- Variables de entorno: definir en *Project Settings → Environment Variables*.
- Preview deployments: cada PR puede tener su propia URL de preview.
- Si se usa Ant Design con Less, valorar uso de `next-antd-less` o tema vía CSS variables/ConfigProvider para evitar problemas de compilación en Vercel.

---

## 5. Referencias rápidas

- [Next.js Docs](https://nextjs.org/docs)
- [Ant Design React](https://ant.design/docs/react/introduce)
- [Ant Design + Next.js](https://ant.design/docs/react/use-with-next)
- [Vercel + Next.js](https://vercel.com/docs/frameworks/nextjs)

---

*Documento vivo: actualizar según avances y decisiones del proyecto.*
