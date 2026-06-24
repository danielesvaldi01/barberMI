"use client"
import { useState, useEffect } from "react"

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40)
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
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Hex grid — architectural scale */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='121'%3E%3Cpolygon points='70%2C2 138%2C38 138%2C119 70%2C119 2%2C119 2%2C38' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C%2Fsvg%3E")`,
        backgroundSize: "140px 121px",
        opacity: 0.06,
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='121'%3E%3Cpolygon points='70%2C2 138%2C38 138%2C119 70%2C119 2%2C119 2%2C38' fill='none' stroke='%23ffffff' stroke-width='5'/%3E%3C%2Fsvg%3E")`,
        backgroundSize: "140px 121px",
        opacity: 0.02,
        filter: "blur(5px)",
      }} />

      {/* Radial vignette — keeps center readable */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #080808 100%)",
      }} />

      {/* Centered column */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "100px 32px 80px",
          width: "100%",
          maxWidth: 680,
          gap: 0,
        }}
      >
        {/* Logo inside glowing hex frame — the signature */}
        <div style={{ position: "relative", width: 164, height: 148, marginBottom: 40 }}>
          {/* Outer glow */}
          <svg viewBox="0 0 164 148" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", filter: "blur(6px)", opacity: 0.35 }}>
            <polygon points="82,3 161,44 161,128 82,145 3,128 3,44" fill="none" stroke="white" strokeWidth="2" />
          </svg>
          {/* Sharp border */}
          <svg viewBox="0 0 164 148" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <polygon points="82,3 161,44 161,128 82,145 3,128 3,44" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          </svg>
          {/* Logo inside */}
          <div style={{ position: "absolute", inset: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LogoSVG />
          </div>
        </div>

        {/* Divider */}
        <Divider />

        {/* Eyebrow */}
        <p style={{
          fontSize: 10,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          margin: "20px 0 10px",
          fontWeight: 500,
        }}>
          Milano · Vintage Haircuts
        </p>

        {/* Main headline */}
        <h1 style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(64px, 12vw, 120px)",
          lineHeight: 0.92,
          letterSpacing: "0.06em",
          color: "#ffffff",
          margin: "0 0 6px",
        }}>
          FIRST CUT
        </h1>

        {/* Wordmark sub — serif italic echoes the logo */}
        <p style={{
          fontSize: "clamp(22px, 4vw, 36px)",
          fontStyle: "italic",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.02em",
          margin: "0 0 20px",
        }}>
          Barber Shop
        </p>

        {/* Divider */}
        <Divider />

        {/* Tagline */}
        <p style={{
          fontStyle: "italic",
          fontWeight: 200,
          fontSize: "clamp(14px, 2vw, 18px)",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.1em",
          margin: "20px 0 36px",
        }}>
          Precision. Style. Milano.
        </p>

        {/* CTA */}
        <a
          href="#servizi"
          style={{
            padding: "14px 44px",
            background: "#ffffff",
            color: "#080808",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 700,
            transition: "background 0.2s",
            marginBottom: 28,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#d0d0d0")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#ffffff")}
        >
          Scopri i Servizi
        </a>

        {/* Address */}
        <span style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}>
          Via delle Forze Armate, 81 · Milano
        </span>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        opacity: scrolled ? 0 : 1,
        transition: "opacity 0.4s",
      }}>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25))" }} />
        <span style={{ fontSize: 8, letterSpacing: "0.3em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>
          scroll
        </span>
      </div>
    </section>
  )
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", maxWidth: 260 }}>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
      <div style={{ width: 3, height: 3, background: "rgba(255,255,255,0.3)", transform: "rotate(45deg)" }} />
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
    </div>
  )
}

function LogoSVG() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <circle cx="100" cy="100" r="94" fill="none" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="87" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
      <path id="arcTop" d="M 22,100 a 78,78 0 0,1 156,0" fill="none" />
      <text>
        <textPath href="#arcTop" startOffset="50%" textAnchor="middle" fill="white" fontSize="14" letterSpacing="10" fontFamily="Arial, sans-serif" fontWeight="700">FIRST CUT</textPath>
      </text>
      <line x1="62" y1="82" x2="138" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <polygon points="138,79.5 145,82 138,84.5" fill="rgba(255,255,255,0.3)" />
      <text x="100" y="124" textAnchor="middle" fill="white" fontSize="44" fontStyle="italic" fontFamily="Georgia, 'Times New Roman', serif" letterSpacing="-2">Barber</text>
      <text x="100" y="141" textAnchor="middle" fill="white" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="700" letterSpacing="9">SHOP</text>
      <line x1="62" y1="148" x2="138" y2="148" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <path d="M 78,157 C 78,153 85,151 92,155 C 96,157 100,157 100,157 C 100,157 104,157 108,155 C 115,151 122,153 122,157" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path id="arcBot" d="M 22,100 a 78,78 0 0,0 156,0" fill="none" />
      <text>
        <textPath href="#arcBot" startOffset="50%" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" letterSpacing="6" fontFamily="Arial, sans-serif" fontWeight="600">VINTAGE HAIRCUTS</textPath>
      </text>
    </svg>
  )
}
