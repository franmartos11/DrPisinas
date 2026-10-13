import type { Metadata, Viewport } from 'next';

import './globals.css';


export const metadata: Metadata = {
  metadataBase: new URL('https://dr-piscinas.com'),
  title: 'Dr. Piscinas — Construcción y mantenimiento de piscinas en Córdoba',
  description:
    'Especialistas en construcción tradicional de piscinas de hormigón armado y mantenimiento integral en Córdoba. Diseñá tu piscina en 3D y conocé el costo al instante.',
  icons: { icon: '/img/logo.png' },
  openGraph: {
    title: 'Dr. Piscinas — Construimos tus sueños',
    description: 'Construcción de piscinas de hormigón armado y mantenimiento integral en Córdoba, Argentina.',
    images: ['/img/obras/obra-25.jpg'],
    locale: 'es_AR',
    type: 'website',
  },
};

export const viewport: Viewport = { themeColor: '#04161F' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" >
      <body>{children}</body>
    </html>
  );
}
