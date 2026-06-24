"use client"
import { useState, useEffect } from "react"

const links = [
  { label: "Servizi", href: "#servizi" },
  { label: "Orari", href: "#orari" },
  { label: "Lavori", href: "#gallery" },
  { label: "Contatti", href: "#contatti" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handle)
    return () => window.removeEventListener("scroll", handle)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 22,
            letterSpacing: "0.25em",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          FIRST CUT
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 36 }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#888",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
          }}
          className="show-mobile"
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: "#fff",
              marginBottom: 5,
              transition: "transform 0.2s",
              transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: "#fff",
              marginBottom: 5,
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: "#fff",
              transition: "transform 0.2s",
              transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: "rgba(0,0,0,0.97)",
            borderTop: "1px solid #222",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 13,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#aaa",
                textDecoration: "none",
                padding: "4px 0",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
