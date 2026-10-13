# Dr. Piscinas — sitio web (Next.js)

Next.js 15 (App Router) + React 19 + TypeScript. Sin librerías de UI: estilos en `app/globals.css`.

## Arrancar

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Producción

```bash
npm run build
npm start
```

Se puede desplegar tal cual en Vercel (importar la carpeta o el repo).

## Estructura

- `app/layout.tsx` — fuentes (next/font: Bricolage Grotesque, Instrument Serif, Manrope) y metadatos SEO
- `app/page.tsx` — arma la página con las secciones
- `app/globals.css` — estilos, animaciones y responsive
- `components/` — una sección por archivo
  - `Header.tsx` — navegación y menú móvil (cliente)
  - `Hero.tsx`, `Marquee.tsx`
  - `Services.tsx` — pestañas Construcción / Mantenimiento (cliente)
  - `PoolSimulator.tsx` — piscina 3D con medidas (cliente)
  - `Portfolio.tsx`, `Gallery.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx`
  - `WhatsAppButton.tsx`, `RevealFallback.tsx`, `icons.tsx`
- `lib/data.ts` — links de contacto, obras del portafolio y fotos de la galería
- `public/img/` — logo y fotos

## Pendientes

- Texto de "Sobre nosotros" y email de contacto (marcados entre corchetes en `components/About.tsx` y `components/Contact.tsx`).
- Logo en mayor resolución o SVG (`public/img/logo.png`).
