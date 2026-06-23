"use client"

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Hex grid background */}
      <div
        className="hex-grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
        }}
      />

      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, #0a0a0a 80%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }}
      />

      {/* Decorative large hex outlines */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="50%,8% 75%,22% 75%,51% 50%,65% 25%,51% 25%,22%"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
        <polygon
          points="50%,2% 82%,18% 82%,57% 50%,73% 18%,57% 18%,18%"
          fill="none"
          stroke="#fff"
          strokeWidth="0.5"
        />
      </svg>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* Logo SVG */}
        <div style={{ width: 220, height: 220, marginBottom: 32 }}>
          <LogoSVG />
        </div>

        {/* Separator */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}
        >
          <div style={{ width: 60, height: 1, background: "#444" }} />
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#666",
            }}
          >
            Vintage Haircuts · Milano
          </span>
          <div style={{ width: 60, height: 1, background: "#444" }} />
        </div>

        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.3em",
            color: "#555",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Via delle Forze Armate, 81 · 20147 Milano
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
          }}
        >
          <a
            href="#servizi"
            style={{
              padding: "12px 32px",
              background: "#ffffff",
              color: "#000",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#ccc")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#fff")
            }
          >
            Scopri i Servizi
          </a>
          <a
            href="#contatti"
            style={{
              padding: "12px 32px",
              border: "1px solid #444",
              color: "#888",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = "#fff"
              el.style.color = "#fff"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = "#444"
              el.style.color = "#888"
            }}
          >
            Come Arrivare
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#444",
        }}
      >
        <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            background: "linear-gradient(to bottom, #444, transparent)",
          }}
        />
      </div>
    </section>
  )
}

function LogoSVG() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Outer circles */}
      <circle cx="100" cy="100" r="94" fill="none" stroke="#ffffff" strokeWidth="2" />
      <circle cx="100" cy="100" r="87" fill="none" stroke="#2a2a2a" strokeWidth="0.5" />

      {/* FIRST CUT - arched top */}
      <path id="arcTop" d="M 22,100 a 78,78 0 0,1 156,0" fill="none" />
      <text>
        <textPath
          href="#arcTop"
          startOffset="50%"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          letterSpacing="10"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
        >
          FIRST CUT
        </textPath>
      </text>

      {/* Top divider line + razor hint */}
      <line x1="62" y1="82" x2="138" y2="82" stroke="#555" strokeWidth="0.8" />
      <polygon points="138,79.5 145,82 138,84.5" fill="#555" />
      <line x1="55" y1="82" x2="62" y2="82" stroke="#555" strokeWidth="2" />

      {/* BARBER - main text */}
      <text
        x="100"
        y="124"
        textAnchor="middle"
        fill="white"
        fontSize="44"
        fontStyle="italic"
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="-2"
      >
        Barber
      </text>

      {/* SHOP */}
      <text
        x="100"
        y="141"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        letterSpacing="9"
      >
        SHOP
      </text>

      {/* Bottom divider */}
      <line x1="62" y1="148" x2="138" y2="148" stroke="#333" strokeWidth="0.5" />

      {/* Mustache */}
      <path
        d="M 78,157 C 78,153 85,151 92,155 C 96,157 100,157 100,157 C 100,157 104,157 108,155 C 115,151 122,153 122,157"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* VINTAGE HAIRCUTS - arched bottom */}
      <path id="arcBot" d="M 22,100 a 78,78 0 0,0 156,0" fill="none" />
      <text>
        <textPath
          href="#arcBot"
          startOffset="50%"
          textAnchor="middle"
          fill="#666"
          fontSize="9"
          letterSpacing="6"
          fontFamily="Arial, sans-serif"
          fontWeight="600"
        >
          VINTAGE HAIRCUTS
        </textPath>
      </text>
    </svg>
  )
}
