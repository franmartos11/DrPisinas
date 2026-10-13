'use client';

import { useState } from 'react';

export default function Services() {
  const [tab, setTab] = useState<'cons' | 'mant'>('cons');
  return (
<section id="servicios" className="light" style={{ padding: '120px 0 140px' }}>
<div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
<div className="rv-l" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
<span className="eyebrow">Servicios</span>
<h2 className="h2 disp">Todo lo que tu<br /><span className="serif" style={{ color: '#0A6B77' }}>piscina</span> necesita</h2>
</div>
<div className="tabs rv" role="tablist" aria-label="Categorías de servicio">
<button type="button" role="tab" className={tab === 'cons' ? 'tab on' : 'tab'} aria-selected={tab === 'cons'} onClick={() => setTab('cons')} id="tab-cons" aria-controls="panel-cons">CONSTRUCCIÓN</button>
<button type="button" role="tab" className={tab === 'mant' ? 'tab on' : 'tab'} aria-selected={tab === 'mant'} onClick={() => setTab('mant')} id="tab-mant" aria-controls="panel-mant">MANTENIMIENTO</button>
</div>
</div>

{tab === 'cons' && (
<div id="panel-cons" role="tabpanel" aria-labelledby="tab-cons" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: '24px' }}>
<a className="svc" href="https://dr-piscinas.com/cotizador" style={{ textDecoration: 'none', color: '#0B2530' }}>
<div className="fill" aria-hidden="true"><svg viewBox="0 0 1440 26" preserveAspectRatio="none"><path d="M0 13 C90 26 270 0 360 13 C450 26 630 0 720 13 C810 26 990 0 1080 13 C1170 26 1350 0 1440 13 L1440 26 L0 26 Z" fill="#2FD0E0"></path></svg></div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
<span className="ico"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18"></path><path d="M5 21V10l7-5 7 5v11"></path><path d="M9 21v-6h6v6"></path></svg></span>
<span className="disp" style={{ fontSize: '15px', fontWeight: '700' }}>01</span>
</div>
<div>
<h3 className="disp">Construcción en hormigón</h3>
<p>Construcción tradicional de piscinas de hormigón armado, diseñadas a tu medida y entregadas llave en mano.</p>
</div>
<div className="more"><span>Cotizar mi obra</span><span className="arr"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div>
</a>
<a className="svc" href="#contacto" style={{ textDecoration: 'none', color: '#0B2530', animationDelay: '.12s' }}>
<div className="fill" aria-hidden="true"><svg viewBox="0 0 1440 26" preserveAspectRatio="none"><path d="M0 13 C90 26 270 0 360 13 C450 26 630 0 720 13 C810 26 990 0 1080 13 C1170 26 1350 0 1440 13 L1440 26 L0 26 Z" fill="#2FD0E0"></path></svg></div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
<span className="ico"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3z"></path><path d="m14 17 3 3 4-6"></path></svg></span>
<span className="disp" style={{ fontSize: '15px', fontWeight: '700' }}>02</span>
</div>
<div>
<h3 className="disp">Revestimientos y reparaciones</h3>
<p>Renovamos revestimientos, reemplazamos skimmers y resolvemos filtraciones para que tu piscina vuelva a estar como nueva.</p>
</div>
<div className="more"><span>Consultar</span><span className="arr"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div>
</a>
</div>

)}
{tab === 'mant' && (
<div id="panel-mant" role="tabpanel" aria-labelledby="tab-mant" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: '24px' }}>
<a className="svc" href="#contacto" style={{ textDecoration: 'none', color: '#0B2530' }}>
<div className="fill" aria-hidden="true"><svg viewBox="0 0 1440 26" preserveAspectRatio="none"><path d="M0 13 C90 26 270 0 360 13 C450 26 630 0 720 13 C810 26 990 0 1080 13 C1170 26 1350 0 1440 13 L1440 26 L0 26 Z" fill="#2FD0E0"></path></svg></div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
<span className="ico"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z"></path><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"></path></svg></span>
<span className="disp" style={{ fontSize: '15px', fontWeight: '700' }}>03</span>
</div>
<div>
<h3 className="disp">Mantenimiento integral</h3>
<p>Agua siempre cristalina: limpieza, control y puesta a punto de tu piscina durante toda la temporada.</p>
</div>
<div className="more"><span>Pedir mantenimiento</span><span className="arr"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div>
</a>
<a className="svc" href="#contacto" style={{ textDecoration: 'none', color: '#0B2530', animationDelay: '.12s' }}>
<div className="fill" aria-hidden="true"><svg viewBox="0 0 1440 26" preserveAspectRatio="none"><path d="M0 13 C90 26 270 0 360 13 C450 26 630 0 720 13 C810 26 990 0 1080 13 C1170 26 1350 0 1440 13 L1440 26 L0 26 Z" fill="#2FD0E0"></path></svg></div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
<span className="ico"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"></path></svg></span>
<span className="disp" style={{ fontSize: '15px', fontWeight: '700' }}>04</span>
</div>
<div>
<h3 className="disp">Invernaje</h3>
<p>Preparamos tu piscina para el invierno y la dejamos lista para disfrutarla apenas vuelva el calor.</p>
</div>
<div className="more"><span>Agendar invernaje</span><span className="arr"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div>
</a>
</div>
)}
</div>
</section>
  );
}
