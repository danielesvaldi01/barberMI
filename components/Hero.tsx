"use client"
import { useState, useEffect } from "react"

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handle)
    return () => window.removeEventListener("scroll", handle)
  }, [])

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Architectural hex grid — large scale, like the LED ceiling */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='121'%3E%3Cpolygon points='70%2C2 138%2C38 138%2C119 70%2C119 2%2C119 2%2C38' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C%2Fsvg%3E")`,
          backgroundSize: "140px 121px",
          opacity: 0.07,
        }}
      />
      {/* Glow layer — blurred */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='121'%3E%3Cpolygon points='70%2C2 138%2C38 138%2C119 70%2C119 2%2C119 2%2C38' fill='none' stroke='%23ffffff' stroke-width='4'/%3E%3C%2Fsvg%3E")`,
          backgroundSize: "140px 121px",
          opacity: 0.025,
          filter: "blur(4px)",
        }}
      />

      {/* Top gradient fade */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to bottom, #080808 0%, transparent 100%)" }} />
      {/* Bottom gradient fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #080808 0%, transparent 100%)" }} />

      {/* Main content — bottom-anchored for editorial feel */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 40px 72px",
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Logo sigil — small, above the headline */}
        <div style={{ width: 72, height: 72, marginBottom: 32, opacity: 0.9 }}>
          <LogoSVG />
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(80px, 16vw, 200px)",
            lineHeight: 0.88,
            letterSpacing: "0.04em",
            color: "#ffffff",
            margin: "0 0 28px",
          }}
        >
          FIRST
          <br />
          <span style={{ color: "rgba(255,255,255,0.2)" }}>CUT</span>
        </h1>

        {/* Thin italic tagline — weight contrast */}
        <p
          style={{
            fontStyle: "italic",
            fontWeight: 200,
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.08em",
            marginBottom: 36,
            maxWidth: 420,
          }}
        >
          Precision. Style. Milano.
        </p>

        {/* Bottom row: CTA + address */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px 40px",
          }}
        >
          <a
            href="#servizi"
            style={{
              padding: "13px 36px",
              background: "#ffffff",
              color: "#080808",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 700,
              transition: "background 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#d8d8d8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#ffffff")}
          >
            Scopri i Servizi
          </a>

          <span
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Via delle Forze Armate, 81 · Milano
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          right: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: scrolled ? 0 : 1,
          transition: "opacity 0.4s",
        }}
      >
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))" }} />
        <span style={{ fontSize: 9, letterSpacing: "0.3em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </div>
    </section>
  )
}

function LogoSVG() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <circle cx="100" cy="100" r="94" fill="none" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="87" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <path id="arcTop" d="M 22,100 a 78,78 0 0,1 156,0" fill="none" />
      <text>
        <textPath href="#arcTop" startOffset="50%" textAnchor="middle" fill="white" fontSize="14" letterSpacing="10" fontFamily="Arial, sans-serif" fontWeight="700">
          FIRST CUT
        </textPath>
      </text>
      <line x1="62" y1="82" x2="138" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <polygon points="138,79.5 145,82 138,84.5" fill="rgba(255,255,255,0.3)" />
      <text x="100" y="124" textAnchor="middle" fill="white" fontSize="44" fontStyle="italic" fontFamily="Georgia, 'Times New Roman', serif" letterSpacing="-2">Barber</text>
      <text x="100" y="141" textAnchor="middle" fill="white" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="700" letterSpacing="9">SHOP</text>
      <line x1="62" y1="148" x2="138" y2="148" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <path d="M 78,157 C 78,153 85,151 92,155 C 96,157 100,157 100,157 C 100,157 104,157 108,155 C 115,151 122,153 122,157" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path id="arcBot" d="M 22,100 a 78,78 0 0,0 156,0" fill="none" />
      <text>
        <textPath href="#arcBot" startOffset="50%" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" letterSpacing="6" fontFamily="Arial, sans-serif" fontWeight="600">
          VINTAGE HAIRCUTS
        </textPath>
      </text>
    </svg>
  )
}
