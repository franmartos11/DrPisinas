import { COTIZADOR_URL, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/data';

export default function Contact() {
  return (
<section id="contacto" className="cta" style={{ padding: '130px 0 120px' }}>
<div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: '56px', alignItems: 'end' }}>
<div className="rv-l" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
<span className="eyebrow" style={{ color: '#04161F' }}>Contacto</span>
<h2 className="h2 disp">Tu piscina<br />empieza <span className="serif">hoy.</span></h2>
<p style={{ margin: '0', fontSize: '20px', lineHeight: '1.55', maxWidth: '480px', fontWeight: '600' }}>Escribinos y te asesoramos sin compromiso, o simulá tu piscina y conocé el costo al instante.</p>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
<a className="btn btn-d" href={WHATSAPP_URL}>Escribir por WhatsApp<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
<a className="btn" href={COTIZADOR_URL} style={{ border: '1.5px solid #04161F', color: '#04161F' }}>Simulador 3D</a>
</div>
</div>
<div className="rv" style={{ display: 'flex', flexDirection: 'column' }}>
<a className="cline" href={WHATSAPP_URL}><span className="cic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12Z"></path></svg></span><span><small>WhatsApp</small>+54 9 351 231-2322</span></a>
<a className="cline" href={INSTAGRAM_URL}><span className="cic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"></circle></svg></span><span><small>Instagram</small>@drpiscina.com.ar</span></a>
<a className="cline" href={FACEBOOK_URL}><span className="cic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7Z"></path></svg></span><span><small>Facebook</small>Siempre Cristalinas</span></a>
<a className="cline" href="mailto:[EMAIL]"><span className="cic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg></span><span><small>Email</small>[TU EMAIL]</span></a>
<div className="cline" style={{ borderBottom: '0' }}><span className="cic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"></path><circle cx="12" cy="9.5" r="2.5"></circle></svg></span><span><small>Zona</small>Córdoba, Argentina</span></div>
</div>
</div>
</section>
  );
}
