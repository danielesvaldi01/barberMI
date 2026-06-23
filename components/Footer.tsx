"use client"

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid #1a1a1a",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Logo text */}
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 20,
            letterSpacing: "0.3em",
            color: "#333",
          }}
        >
          FIRST CUT BARBER SHOP
        </span>

        {/* Links */}
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "Instagram", href: "https://www.instagram.com/firstcut_milano/" },
            { label: "Google Maps", href: "https://maps.google.com/?q=Via+delle+Forze+Armate+81+Milano" },
            { label: "Telefono", href: "tel:+393773249299" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#444",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#aaa")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#444")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: "#1a1a1a" }} />

        {/* Copyright */}
        <p
          style={{
            fontSize: 11,
            color: "#2a2a2a",
            letterSpacing: "0.1em",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} FIRST CUT Barber Shop · Via delle Forze Armate, 81 · Milano
        </p>
      </div>
    </footer>
  )
}
