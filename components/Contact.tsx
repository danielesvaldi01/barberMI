"use client"

export default function Contact() {
  return (
    <section
      id="contatti"
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
            Dove siamo
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
            CONTATTI
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 48, height: 1, background: "#333" }} />
            <div style={{ width: 4, height: 4, background: "#555", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 1, background: "#333" }} />
          </div>
        </div>

        {/* Grid: map + info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
          }}
          className="contact-grid"
        >
          {/* Map */}
          <div
            style={{
              border: "1px solid #1e1e1e",
              overflow: "hidden",
              height: 360,
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Via+delle+Forze+Armate+81+20147+Milano+MI&output=embed"
              width="100%"
              height="100%"
              style={{ border: "none", filter: "grayscale(100%) invert(90%) contrast(85%)" }}
              loading="lazy"
              title="Mappa FIRST CUT Barber Shop"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              padding: "8px 0",
            }}
          >
            <InfoRow
              icon={<PinIcon />}
              label="Indirizzo"
              value="Via delle Forze Armate, 81"
              sub="20147 Milano MI"
              href="https://maps.google.com/?q=Via+delle+Forze+Armate+81+Milano"
            />
            <InfoRow
              icon={<PhoneIcon />}
              label="Telefono"
              value="377 324 9299"
              href="tel:+393773249299"
            />
            <InfoRow
              icon={<InstagramIcon />}
              label="Instagram"
              value="@firstcut_milano"
              href="https://www.instagram.com/firstcut_milano/"
            />
            <InfoRow
              icon={<StarIcon />}
              label="Google Reviews"
              value="4,8 ★  ·  32 recensioni"
              href="https://maps.google.com/?q=First+Cut+Barber+Shop+Milano"
            />

            <a
              href="https://maps.google.com/?q=Via+delle+Forze+Armate+81+Milano"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                border: "1px solid #333",
                color: "#888",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                alignSelf: "flex-start",
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
              <PinIcon size={14} />
              Apri in Google Maps
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function InfoRow({
  icon,
  label,
  value,
  sub,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub?: string
  href?: string
}) {
  const content = (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
      <div style={{ color: "#555", paddingTop: 2, flexShrink: 0 }}>{icon}</div>
      <div>
        <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginBottom: 4 }}>
          {label}
        </p>
        <p style={{ fontSize: 15, color: "#ddd", letterSpacing: "0.03em" }}>{value}</p>
        {sub && <p style={{ fontSize: 13, color: "#555", marginTop: 2 }}>{sub}</p>}
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block", transition: "opacity 0.2s" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      >
        {content}
      </a>
    )
  }
  return <div>{content}</div>
}

function PinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
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

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}
