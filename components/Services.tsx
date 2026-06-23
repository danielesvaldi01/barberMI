"use client"

const services = [
  {
    label: "TAGLIO",
    desc: "Tagli moderni e classici su misura per ogni stile",
    svg: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="10" r="4" stroke="white" strokeWidth="1.5" />
        <circle cx="8" cy="30" r="4" stroke="white" strokeWidth="1.5" />
        <line x1="11" y1="12" x2="36" y2="20" stroke="white" strokeWidth="1.5" />
        <line x1="11" y1="28" x2="36" y2="20" stroke="white" strokeWidth="1.5" />
        <line x1="22" y1="20" x2="32" y2="20" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "FADE & TAPER",
    desc: "Sfumature precise e degradé dal barbiere",
    svg: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 32 Q14 20 20 12 Q26 20 32 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 32 Q14 22 20 16 Q26 22 28 32" stroke="#666" strokeWidth="1" strokeLinecap="round" />
        <path d="M16 32 Q17 25 20 20 Q23 25 24 32" stroke="#444" strokeWidth="1" strokeLinecap="round" />
        <line x1="8" y1="32" x2="32" y2="32" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "RASATURA",
    desc: "Rasatura classica con rasoio a mano libera",
    svg: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="24" height="6" rx="1" stroke="white" strokeWidth="1.5" />
        <line x1="30" y1="15" x2="36" y2="15" stroke="white" strokeWidth="1.5" />
        <line x1="6" y1="25" x2="30" y2="25" stroke="#555" strokeWidth="0.8" />
        <line x1="6" y1="28" x2="30" y2="28" stroke="#555" strokeWidth="0.8" />
        <line x1="6" y1="31" x2="30" y2="31" stroke="#555" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    label: "BARBA",
    desc: "Rifinitura, styling e trattamento barba",
    svg: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="14" r="7" stroke="white" strokeWidth="1.5" />
        <path d="M8 36 Q8 26 14 24 Q17 30 20 30 Q23 30 26 24 Q32 26 32 36" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 32 Q17 28 20 28 Q23 28 26 32" stroke="#555" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "TRATTAMENTI",
    desc: "Prodotti di qualità per capelli e cute",
    svg: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6 L20 34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 14 Q16 10 20 14 Q24 18 28 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M12 20 Q16 16 20 20 Q24 24 28 20" stroke="#888" strokeWidth="1" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="8" r="2" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section
      id="servizi"
      style={{ padding: "96px 24px", background: "#0a0a0a" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: 12,
            }}
          >
            Cosa facciamo
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(48px, 8vw, 80px)",
              letterSpacing: "0.12em",
              lineHeight: 1,
              color: "#fff",
              margin: "0 0 16px",
            }}
          >
            I NOSTRI SERVIZI
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 48, height: 1, background: "#333" }} />
            <div style={{ width: 4, height: 4, background: "#555", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 1, background: "#333" }} />
          </div>
        </div>

        {/* Hex cards grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "48px 32px",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
            >
              {/* Hexagonal card */}
              <div
                className="hex-flat"
                style={{
                  width: 156,
                  height: 135,
                  background: "#111",
                  border: "1px solid #222",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1a1a1a")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#111")}
              >
                {s.svg}
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: 15,
                    letterSpacing: "0.18em",
                    color: "#fff",
                  }}
                >
                  {s.label}
                </span>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#555",
                  textAlign: "center",
                  maxWidth: 140,
                  lineHeight: 1.5,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
