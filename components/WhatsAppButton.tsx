import { WHATSAPP_URL } from '@/lib/data';

export default function WhatsAppButton() {
  return (
<a className="fab" href={WHATSAPP_URL} aria-label="Escribir por WhatsApp">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12Z"></path><path d="M8.5 10.5c.5 2 2 3.5 4 4.2l1.3-1.2 2 .8"></path></svg>
</a>
  );
}
