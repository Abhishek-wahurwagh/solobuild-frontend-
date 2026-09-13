"use client";

import { useEffect } from "react";

/**
 * Adds a subtle parallax/fade effect to the hero as the user scrolls.
 * Sets CSS custom properties on the hero element; pure CSS transforms handle the rest.
 * No layout impact — purely enhances the scroll feel.
 */
export default function HeroParallax() {
  useEffect(() => {
    const hero = document.getElementById("site-hero");
    if (!hero) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroH = hero!.offsetHeight;
        const progress = Math.min(scrollY / heroH, 1);

        // Gentle upward shift (max 40px) + slight opacity fade (min 0.6)
        const shift = progress * 40;
        const opacity = 1 - progress * 0.35;

        const inner = hero!.querySelector<HTMLElement>(".hero-parallax");
        if (inner) {
          inner.style.transform = `translateY(-${shift}px)`;
          inner.style.opacity = String(opacity);
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
