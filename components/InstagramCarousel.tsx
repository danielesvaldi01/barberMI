"use client"
import { useState } from "react"

const IG_URL = "https://www.instagram.com/firstcut_milano/"

const posts = [
  "DMAudVdNF0Z",
  "DKRkZ0PNXf5",
  "DKhLsQItg8_",
  "DJCZ8vEIgit",
  "DITPNS1tPRV",
]

export default function InstagramCarousel() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(a => (a - 1 + posts.length) % posts.length)
  const next = () => setActive(a => (a + 1) % posts.length)

  return (
    <section id="instagram" style={{ padding: "96px 24px", background: "#080808" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#555", marginBottom: 12 }}>
            Seguici su
          </p>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 8vw, 80px)", letterSpacing: "0.12em", lineHeight: 1, color: "#fff", margin: "0 0 8px" }}>
            INSTAGRAM
          </h2>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, color: "#666", textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#aaa")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#666")}
          >
            @firstcut_milano
          </a>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 16 }}>
            <div style={{ width: 48, height: 1, background: "#333" }} />
            <div style={{ width: 4, height: 4, background: "#555", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 1, background: "#333" }} />
          </div>
        </div>

        {/* Desktop: 3+2 wrap grid */}
        <div className="ig-desktop" style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          {posts.map(code => (
            <div key={code} style={{ width: 320 }}>
              <iframe
                src={`https://www.instagram.com/p/${code}/embed/`}
                width="320"
                height="480"
                style={{ border: "none", display: "block" }}
                loading="lazy"
                title="Post Instagram FIRST CUT"
              />
            </div>
          ))}
        </div>

        {/* Mobile: 1 at a time */}
        <div className="ig-mobile">
          <div style={{ position: "relative" }}>
            <iframe
              src={`https://www.instagram.com/p/${posts[active]}/embed/`}
              width="100%"
              height="520"
              style={{ border: "none", display: "block" }}
              loading="lazy"
              title="Post Instagram FIRST CUT"
            />
            <button
              onClick={prev}
              aria-label="Precedente"
              style={{ position: "absolute", left: 8, top: "40%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.7)", border: "1px solid #444", color: "#fff", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20 }}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Successivo"
              style={{ position: "absolute", right: 8, top: "40%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.7)", border: "1px solid #444", color: "#fff", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20 }}
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Post ${i + 1}`}
                style={{ width: i === active ? 20 : 6, height: 6, borderRadius: 3, background: i === active ? "#fff" : "#333", border: "none", cursor: "pointer", padding: 0, transition: "width 0.3s, background 0.3s" }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 36px", border: "1px solid #333", color: "#888", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#fff"; el.style.color = "#fff" }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#333"; el.style.color = "#888" }}
          >
            <InstagramIcon />
            Vedi il Profilo
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .ig-desktop { display: flex !important; }
          .ig-mobile { display: none !important; }
        }
        @media (max-width: 639px) {
          .ig-desktop { display: none !important; }
          .ig-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}
