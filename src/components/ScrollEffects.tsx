"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // Scroll progress bar
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      if (!bar) return;
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      bar.style.transform = `scaleX(${Math.min(pct, 1)})`;
      bar.style.width = "100%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return <div id="scroll-progress" aria-hidden="true" />;
}
