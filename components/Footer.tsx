import Image from 'next/image';

export default function Footer() {
  return (
<footer className="foot" style={{ padding: '56px 0 40px' }}>
<div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'center', justifyContent: 'space-between' }}>
<span className="logo-pill" style={{ alignSelf: 'center' }}><Image src="/img/logo.png" alt="Dr. Piscinas" width={180} height={113} /></span>
<nav style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }} aria-label="Pie de página">
<a href="#servicios">Construcción</a>
<a href="#servicios">Mantenimiento</a>
<a href="#obras">Portafolio</a>
<a href="#nosotros">Sobre nosotros</a>
<a href="#contacto">Contacto</a>
</nav>
<span>© {new Date().getFullYear()} Dr. Piscinas · Córdoba, Argentina</span>
</div>
</footer>
  );
}
