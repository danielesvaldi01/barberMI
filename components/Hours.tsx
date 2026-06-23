const schedule = [
  { day: "Lunedì", hours: "09:00 – 17:00" },
  { day: "Martedì", hours: "09:00 – 20:30" },
  { day: "Mercoledì", hours: "09:00 – 20:30" },
  { day: "Giovedì", hours: "09:00 – 20:30" },
  { day: "Venerdì", hours: "09:00 – 21:00" },
  { day: "Sabato", hours: "09:00 – 21:00" },
  { day: "Domenica", hours: "09:00 – 20:30" },
]

function getTodayIndex() {
  const d = new Date().getDay()
  return d === 0 ? 6 : d - 1
}

export default function Hours() {
  const todayIdx = getTodayIndex()

  return (
    <section
      id="orari"
      style={{ padding: "96px 24px", background: "#0c0c0c" }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: 12,
            }}
          >
            Quando trovarci
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
            ORARI
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 48, height: 1, background: "#333" }} />
            <div style={{ width: 4, height: 4, background: "#555", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 1, background: "#333" }} />
          </div>
        </div>

        {/* Barber pole accent */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <BarberPoleIcon />
        </div>

        {/* Schedule */}
        <div
          style={{
            border: "1px solid #1e1e1e",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {schedule.map((row, i) => (
            <div
              key={row.day}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 28px",
                borderBottom: i < schedule.length - 1 ? "1px solid #1a1a1a" : "none",
                background: i === todayIdx ? "#161616" : "transparent",
                transition: "background 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {i === todayIdx && (
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#fff",
                      flexShrink: 0,
                    }}
                  />
                )}
                <span
                  style={{
                    fontFamily: i === todayIdx ? "var(--font-bebas)" : undefined,
                    fontSize: i === todayIdx ? 16 : 13,
                    letterSpacing: i === todayIdx ? "0.15em" : "0.05em",
                    color: i === todayIdx ? "#fff" : "#666",
                    textTransform: i === todayIdx ? "uppercase" : undefined,
                    marginLeft: i !== todayIdx ? 18 : 0,
                  }}
                >
                  {row.day}
                </span>
              </div>
              <span
                style={{
                  fontSize: i === todayIdx ? 14 : 13,
                  letterSpacing: "0.1em",
                  color: i === todayIdx ? "#fff" : "#555",
                  fontFamily: i === todayIdx ? "var(--font-bebas)" : undefined,
                }}
              >
                {row.hours}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 11,
            color: "#444",
            letterSpacing: "0.05em",
          }}
        >
          ✦ Gli orari potrebbero subire variazioni nei giorni festivi
        </p>
      </div>
    </section>
  )
}

function BarberPoleIcon() {
  return (
    <svg width="24" height="56" viewBox="0 0 24 56" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="0" width="8" height="4" rx="1" fill="#333" />
      <rect x="9" y="4" width="6" height="48" rx="1" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
      <path d="M9 8 L15 14 L9 14 Z" fill="#444" />
      <path d="M9 18 L15 24 L9 24 Z" fill="#555" />
      <path d="M9 28 L15 34 L9 34 Z" fill="#444" />
      <path d="M9 38 L15 44 L9 44 Z" fill="#555" />
      <rect x="8" y="52" width="8" height="4" rx="1" fill="#333" />
    </svg>
  )
}
