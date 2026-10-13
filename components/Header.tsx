'use client';

import Image from 'next/image';
import { COTIZADOR_URL } from '@/lib/data';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
<header className="hdr">
<div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', minHeight: '80px' }}>
<a className="logo" href="#inicio" aria-label="Dr. Piscinas — inicio"><span className="logo-pill"><Image src="/img/logo.png" alt="Dr. Piscinas" width={180} height={113} priority /></span></a>
<nav className="nav nav-d" aria-label="Principal">
<a href="#inicio">Inicio</a>
<a href="#servicios">Servicios</a>
<a href="#obras">Portafolio</a>
<a href="#nosotros">Sobre nosotros</a>
<a href="#contacto">Contacto</a>
</nav>
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
<a className="btn btn-p nav-d" href={COTIZADOR_URL} style={{ minHeight: '48px', padding: '0 22px' }}>Simular en 3D</a>
<button className="burger" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"></path></svg>
</button>
</div>
</div>
{open && (
<div className="wrap" id="mnav">
<nav className="mnav" aria-label="Menú móvil">
<a onClick={close} href="#inicio">Inicio</a>
<a onClick={close} href="#servicios">Servicios</a>
<a onClick={close} href="#obras">Portafolio</a>
<a onClick={close} href="#nosotros">Sobre nosotros</a>
<a onClick={close} href="#contacto">Contacto</a>
<a onClick={close} href={COTIZADOR_URL} style={{ color: '#2FD0E0' }}>Simular mi piscina en 3D</a>
</nav>
</div>
)}
</header>
  );
}
