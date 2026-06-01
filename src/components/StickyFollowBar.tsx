"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/schema";

export default function StickyFollowBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(28,25,23,0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(230,179,90,0.2)",
        padding: "0.75rem 1rem",
        display: "flex",
        justifyContent: "center",
        gap: "0.75rem",
        flexWrap: "wrap",
      }}
      className="sticky-follow-bar"
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          color: "rgba(245,240,232,0.55)",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        Folge Alex:
      </span>
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.45rem 1rem",
          borderRadius: "9999px",
          background: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.8rem",
          textDecoration: "none",
        }}
      >
        📸 Instagram
      </a>
      <a
        href={siteConfig.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.45rem 1rem",
          borderRadius: "9999px",
          background: "#333",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.8rem",
          textDecoration: "none",
        }}
      >
        🎬 TikTok
      </a>
      <a
        href={siteConfig.youtube}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.45rem 1rem",
          borderRadius: "9999px",
          background: "#FF0000",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.8rem",
          textDecoration: "none",
        }}
      >
        ▶️ YouTube
      </a>

      <style>{`
        @media (min-width: 769px) {
          .sticky-follow-bar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
