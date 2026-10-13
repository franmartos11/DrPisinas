import Image from 'next/image';
import { GALLERY } from '@/lib/data';

export default function Gallery() {
  return (
<section className="gal dark" aria-labelledby="galt">
<div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px' }}>
<div className="rv-l" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
<span className="eyebrow">De la excavación al agua</span>
<h2 id="galt" className="h2 disp">Cada obra,<br /><span className="serif aqua">paso a paso</span></h2>
</div>
<p className="lede rv" style={{ maxWidth: '420px' }}>Hierro, hormigón, revestimiento y pintura: así trabajamos en cada piscina que construimos en Córdoba.</p>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
{[GALLERY.slice(0, 17), GALLERY.slice(17)].map((row, r) => (
<div key={r} className={r === 0 ? 'grow' : 'grow rev'}>
{[...row, ...row].map((img, i) => (
<div key={i} className="gi" aria-hidden={i >= row.length ? true : undefined}>
<Image src={img.src} alt={i >= row.length ? '' : img.alt} width={img.w} height={img.h} sizes="380px" />
</div>
))}
</div>
))}
</div>
</section>
  );
}
