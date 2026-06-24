"use client"

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
    <section id="orari" style={{ padding: "96px 24px", background: "#0d0d0d" }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#555", marginBottom: 12 }}>
            Quando trovarci
          </p>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 8vw, 80px)", letterSpacing: "0.12em", lineHeight: 1, color: "#fff", margin: "0 0 16px" }}>
            ORARI
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 48, height: 1, background: "#333" }} />
            <div style={{ width: 4, height: 4, background: "#555", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 1, background: "#333" }} />
          </div>
        </div>

        {/* Schedule table */}
        <div style={{ overflow: "hidden" }}>
          {schedule.map((row, i) => {
            const isToday = i === todayIdx
            return (
              <div
                key={row.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 24px",
                  borderBottom: i < schedule.length - 1 ? "1px solid #1c1c1c" : "none",
                  position: "relative",
                  background: isToday ? "rgba(255,255,255,0.04)" : "transparent",
                }}
              >
                {/* Left accent bar for today */}
                {isToday && (
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "#ffffff" }} />
                )}

                <span style={{
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  color: isToday ? "#ffffff" : "#555",
                  paddingLeft: isToday ? 16 : 18,
                }}>
                  {row.day}
                  {isToday && (
                    <span style={{ marginLeft: 10, fontSize: 9, letterSpacing: "0.25em", color: "#444", textTransform: "uppercase" }}>
                      oggi
                    </span>
                  )}
                </span>

                <span style={{
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  color: isToday ? "#ffffff" : "#555",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {row.hours}
                </span>
              </div>
            )
          })}
        </div>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: 11, color: "#333", letterSpacing: "0.05em" }}>
          Gli orari possono variare nei giorni festivi
        </p>
      </div>
    </section>
  )
}
