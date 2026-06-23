"use client"
import { useState, useEffect, useCallback } from "react"

const IG_URL = "https://www.instagram.com/firstcut_milano/"

const posts = [
  {
    label: "FADE",
    subtitle: "Sfumatura perfetta",
    bg: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #0d0d0d 100%)",
    pattern: "stripes",
    icon: (
      <svg viewBox="0 0 60 60" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50 Q18 30 30 18 Q42 30 50 50" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M16 50 Q21 34 30 24 Q39 34 44 50" stroke="#555" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M22 50 Q25 39 30 32 Q35 39 38 50" stroke="#333" strokeWidth="1" strokeLinecap="round" fill="none" />
        <line x1="10" y1="50" x2="50" y2="50" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "RASATURA",
    subtitle: "Classica a mano libera",
    bg: "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 50%, #0a0a0a 100%)",
    pattern: "dots",
    icon: (
      <svg viewBox="0 0 60 60" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="22" width="36" height="10" rx="1.5" stroke="white" strokeWidth="2" />
        <line x1="44" y1="27" x2="54" y2="27" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="27" r="2" fill="#555" />
        <line x1="8" y1="38" x2="44" y2="38" stroke="#444" strokeWidth="0.8" />
        <line x1="8" y1="41" x2="44" y2="41" stroke="#333" strokeWidth="0.8" />
        <line x1="8" y1="44" x2="44" y2="44" stroke="#222" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    label: "BARBA",
    subtitle: "Styling & trattamento",
    bg: "linear-gradient(135deg, #121212 0%, #1e1e1e 50%, #0c0c0c 100%)",
    pattern: "hex",
    icon: (
      <svg viewBox="0 0 60 60" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="20" r="10" stroke="white" strokeWidth="2" />
        <path d="M12 54 Q12 40 20 36 Q25 44 30 44 Q35 44 40 36 Q48 40 48 54" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M20 48 Q25 42 30 42 Q35 42 40 48" stroke="#555" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "TAGLIO",
    subtitle: "Moderno & su misura",
    bg: "linear-gradient(135deg, #0e0e0e 0%, #1b1b1b 50%, #080808 100%)",
    pattern: "lines",
    icon: (
      <svg viewBox="0 0 60 60" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="16" r="6" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="44" r="6" stroke="white" strokeWidth="2" />
        <line x1="17" y1="19" x2="54" y2="30" stroke="white" strokeWidth="2" />
        <line x1="17" y1="41" x2="54" y2="30" stroke="white" strokeWidth="2" />
        <line x1="33" y1="30" x2="50" y2="30" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
]

export default function InstagramCarousel() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)

  const next = useCallback(() => setActive((p) => (p + 1) % posts.length), [])
  const prev = useCallback(() => setActive((p) => (p - 1 + posts.length) % posts.length), [])

  useEffect(() => {
    if (hovered) return
    const t = setInterval(next, 3000)
    return () => clearInterval(t)
  }, [hovered, next])

  return (
    <section
      id="instagram"
      style={{ padding: "96px 24px", background: "#080808" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
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
            Seguici su
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(48px, 8vw, 80px)",
              letterSpacing: "0.12em",
              lineHeight: 1,
              color: "#fff",
              margin: "0 0 8px",
            }}
          >
            INSTAGRAM
          </h2>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: "#666",
              textDecoration: "none",
              letterSpacing: "0.1em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#aaa")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#666")}
          >
            @firstcut_milano
          </a>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 16 }}>
            <div style={{ width: 48, height: 1, background: "#333" }} />
            <div style={{ width: 4, height: 4, background: "#555", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 1, background: "#333" }} />
          </div>
        </div>

        {/* Desktop: 4-card grid */}
        <div
          className="ig-desktop"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
        >
          {posts.map((p, i) => (
            <PostCard key={i} post={p} index={i} isActive={i === active} />
          ))}
        </div>

        {/* Mobile: single card carousel */}
        <div className="ig-mobile">
          <div
            style={{ position: "relative", overflow: "hidden" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <PostCard post={posts[active]} index={active} isActive fullWidth />

            {/* Arrow controls */}
            <button
              onClick={prev}
              aria-label="Precedente"
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.6)",
                border: "1px solid #333",
                color: "#fff",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Successivo"
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.6)",
                border: "1px solid #333",
                color: "#fff",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div
            style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}
          >
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
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 36px",
              border: "1px solid #333",
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
              el.style.borderColor = "#333"
              el.style.color = "#888"
            }}
          >
            <InstagramIcon />
            Vedi il Profilo
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .ig-desktop { display: grid !important; }
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

function PostCard({
  post,
  index,
  isActive,
  fullWidth,
}: {
  post: (typeof posts)[0]
  index: number
  isActive: boolean
  fullWidth?: boolean
}) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        aspectRatio: "1 / 1",
        width: fullWidth ? "100%" : undefined,
        background: post.bg,
        border: `1px solid ${hov ? "#444" : "#1e1e1e"}`,
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.2s, transform 0.2s",
        transform: hov ? "scale(1.02)" : "scale(1)",
      }}
    >
      {/* Subtle hex overlay */}
      <div
        className="hex-grid-dark"
        style={{ position: "absolute", inset: 0, opacity: 0.4 }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        {post.icon}
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 22,
            letterSpacing: "0.2em",
            color: "#fff",
          }}
        >
          {post.label}
        </span>
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#666",
          }}
        >
          {post.subtitle}
        </span>
      </div>

      {/* Instagram tag */}
      <span
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 10,
          letterSpacing: "0.15em",
          color: "#444",
          zIndex: 2,
        }}
      >
        @firstcut_milano
      </span>

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.03)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.2s",
          zIndex: 1,
        }}
      />
    </a>
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
