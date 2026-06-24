"use client"
import { useState } from "react"

const posts = [
  "DMAudVdNF0Z",
  "DKRkZ0PNXf5",
  "DKhLsQItg8_",
  "DJCZ8vEIgit",
  "DITPNS1tPRV",
]

export default function Gallery() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(a => (a - 1 + posts.length) % posts.length)
  const next = () => setActive(a => (a + 1) % posts.length)

  return (
    <section
      id="gallery"
      style={{ padding: "96px 0", background: "#080808" }}
    >
      {/* Section label */}
      <div style={{ textAlign: "center", marginBottom: 40, padding: "0 24px" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#555", marginBottom: 12 }}>
          I nostri lavori
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 48, height: 1, background: "#333" }} />
          <div style={{ width: 4, height: 4, background: "#555", transform: "rotate(45deg)" }} />
          <div style={{ width: 48, height: 1, background: "#333" }} />
        </div>
      </div>

      {/* Carousel */}
      <div style={{ maxWidth: 560, margin: "0 auto", position: "relative" }}>

        {/* Sliding track */}
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transform: `translateX(-${active * 100}%)`,
              transition: "transform 0.35s ease",
            }}
          >
            {posts.map(code => (
              <div key={code} style={{ flexShrink: 0, width: "100%" }}>
                <iframe
                  src={`https://www.instagram.com/p/${code}/embed/`}
                  width="100%"
                  height="560"
                  style={{ border: "none", display: "block" }}
                  title="Post"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Precedente"
          style={{
            position: "absolute",
            left: -20,
            top: "45%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.8)",
            border: "1px solid #444",
            color: "#fff",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 22,
            zIndex: 10,
          }}
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Successivo"
          style={{
            position: "absolute",
            right: -20,
            top: "45%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.8)",
            border: "1px solid #444",
            color: "#fff",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 22,
            zIndex: 10,
          }}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
        {posts.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Post ${i + 1}`}
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === active ? "#fff" : "#333",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s, background 0.3s",
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 639px) {
          #gallery > div:nth-child(2) {
            max-width: 100% !important;
            margin: 0 !important;
          }
          #gallery > div:nth-child(2) > button:first-of-type { left: 6px !important; }
          #gallery > div:nth-child(2) > button:last-of-type { right: 6px !important; }
        }
      `}</style>
    </section>
  )
}
