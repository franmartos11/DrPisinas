'use client';

import { useEffect } from 'react';

/** Aparición al hacer scroll para navegadores sin `animation-timeline: view()`. */
export default function RevealFallback() {
  useEffect(() => {
    if (CSS.supports?.('animation-timeline: view()') || !('IntersectionObserver' in window)) return;
    const els = document.querySelectorAll<HTMLElement>('.rv, .rv-l, .rv-s');
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity .9s cubic-bezier(.2,.8,.2,1), transform .9s cubic-bezier(.2,.8,.2,1)';
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'none';
          io.unobserve(el);
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
