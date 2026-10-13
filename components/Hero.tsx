import Image from 'next/image';
import { COTIZADOR_URL } from '@/lib/data';

export default function Hero() {
  return (
<section id="inicio" className="hero">
<Image className="hero-ph" src="/img/obras/obra-25.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" />
<div className="hero-veil" aria-hidden="true"></div>


<a className="badge" href={COTIZADOR_URL} aria-label="Simulá tu piscina en 3D">
<svg className="ring" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"></path></defs><text fontFamily="var(--font-body), sans-serif" fontSize="15" fontWeight="800" letterSpacing="4.2" fill="currentColor"><textPath href="#circ">SIMULÁ TU PISCINA EN 3D · SIN COMPROMISO · </textPath></text></svg>
<span className="core"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 3 8l9 5 9-5-9-5Z"></path><path d="m3 13 9 5 9-5"></path><path d="M3 8v8M21 8v8"></path></svg></span>
</a>

<div className="wrap" style={{ position: 'relative', zIndex: '3', display: 'flex', flexDirection: 'column', gap: '36px' }}>
<span className="chip fade" style={{ alignSelf: 'flex-start', animationDelay: '.2s' }}><span className="dot"></span>Córdoba, Argentina · Hormigón armado</span>
<h1 className="h1 disp">
<span className="ln"><span style={{ animationDelay: '.25s' }}>Construimos</span></span>
<span className="ln"><span style={{ animationDelay: '.45s' }}>tus <span className="serif">sueños</span></span></span>
</h1>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
<p className="lede fade" style={{ animationDelay: '.9s' }}>Soluciones integrales en piscinas. Especialistas en construcción tradicional de piscinas de hormigón armado y mantenimiento integral en Córdoba.</p>
<div className="fade" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', animationDelay: '1.1s' }}>
<a className="btn btn-p" href={COTIZADOR_URL}>Simular mi piscina en 3D<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
<a className="btn btn-g" href="#obras">Ver obras</a>
</div>
</div>
<div className="fade" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', animationDelay: '1.3s' }}>
<span className="chip"><span className="dot"></span>100% personalizado</span>
<span className="chip"><span className="dot"></span>Sin compromiso</span>
<span className="chip"><span className="dot"></span>Cotización llave en mano</span>
</div>
</div>


</section>
  );
}
