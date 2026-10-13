import Image from 'next/image';

export default function About() {
  return (
<section id="nosotros" className="dark" style={{ padding: '140px 0', background: '#04161F', position: 'relative', overflow: 'hidden' }}>
<div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: '64px', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
<span className="eyebrow rv">Sobre nosotros</span>
<p className="big disp rv">Especialistas en construcción <span className="serif">tradicional</span> de piscinas de hormigón armado y mantenimiento integral en <span className="serif">Córdoba.</span></p>
<p className="lede rv" style={{ color: '#9FC3CA' }}>[TEXTO SOBRE NOSOTROS: historia del equipo, años de trayectoria y forma de trabajo]</p>
<div className="rv">
<div className="val"><span>01</span>Hormigón armado, construcción tradicional</div>
<div className="val"><span>02</span>Proyectos 100% personalizados</div>
<div className="val"><span>03</span>Cotización llave en mano, sin compromiso</div>
<div className="val" style={{ borderBottom: '1px solid rgba(127,232,242,.18)' }}><span>04</span>Siempre cristalinas</div>
</div>
</div>
<div className="team par" style={{ border: '0', padding: '0' }}><Image src="/img/obras/obra-27.jpg" alt="Equipo de Dr. Piscinas pintando una piscina" fill sizes="(max-width: 640px) 100vw, 50vw" /><span className="cap">Nuestro equipo en obra</span></div>
</div>
</section>
  );
}
