import Image from 'next/image';
import { PROJECTS } from '@/lib/data';
import { ArrowUpRight } from './icons';

export default function Portfolio() {
  return (
<section id="obras" className="light" style={{ padding: '130px 0 140px' }}>
<div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
<div className="rv-l" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
<span className="eyebrow">Portafolio</span>
<h2 className="h2 disp">Obras que <span className="serif" style={{ color: '#0A6B77' }}>hablan</span><br />por nosotros</h2>
</div>
<a className="btn btn-d rv" href="https://www.instagram.com/drpiscina.com.ar">Ver más en Instagram</a>
</div>
<div className="pf-grid">
{PROJECTS.map((p, i) => (
<a key={p.title} className="pf rv-s" href="#contacto" style={i % 2 === 1 ? { marginTop: '48px' } : undefined}>
<div className="art"><Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 100vw, 25vw" /></div>
<div className="pf-b"><div><span className="tag">{p.category}</span><h3 className="disp">{p.title}</h3></div><span className="go"><ArrowUpRight /></span></div>
</a>
))}
</div>
</div>
</section>
  );
}
