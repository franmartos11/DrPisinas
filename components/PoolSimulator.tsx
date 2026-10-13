'use client';

import { useState } from 'react';
import { COTIZADOR_URL } from '@/lib/data';

const UNIT = 38;

export default function PoolSimulator() {
  const [largo, setLargo] = useState(8);
  const [ancho, setAncho] = useState(4);
  return (
<section className="sim dark" style={{ padding: '140px 0' }}>
<div className="wrap" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))', gap: '56px', alignItems: 'center' }}>
<div className="rv-l" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
<span className="eyebrow">Cotizador 3D</span>
<h2 className="h2 disp">Diseñá tu piscina <span className="serif aqua">en 3D</span></h2>
<p className="lede">Y conocé el costo al instante. Mové las medidas y mirá cómo toma forma — después, cotizala completa en nuestro simulador.</p>
<div className="panel">
<div className="ctl">
<label htmlFor="largo">Largo <b>{largo} m</b></label>
<input id="largo" className="rng" type="range" min="4" max="12" step="1" value={largo} onChange={(e) => setLargo(Number(e.target.value))} />
</div>
<div className="ctl">
<label htmlFor="ancho">Ancho <b>{ancho} m</b></label>
<input id="ancho" className="rng" type="range" min="2" max="6" step="1" value={ancho} onChange={(e) => setAncho(Number(e.target.value))} />
</div>
<div className="area">
<span style={{ fontWeight: '700', color: '#C3D9DE' }}>Espejo de agua</span>
<span className="disp" style={{ fontSize: '40px', fontWeight: '800', color: '#2FD0E0' }}>{largo * ancho} m²</span>
</div>
<a className="btn btn-p" href={COTIZADOR_URL} style={{ justifyContent: 'center' }}>Conocer el costo ahora<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</div>
<div className="scene rv-s" role="img" aria-label="Vista 3D de una piscina con las medidas elegidas">
<div className="pscale">
<div className="pool" style={{ width: largo * UNIT, height: ancho * UNIT }}>
<div className="floor tiles"></div>
<div className="wall wn tiles"></div>
<div className="wall ws tiles"></div>
<div className="wall ww tiles"></div>
<div className="wall we tiles"></div>
<div className="water"></div>
<div className="deck"></div>
<div className="shine3d"></div>
</div>
</div>
</div>
</div>
</section>
  );
}
