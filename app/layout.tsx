import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "FIRST CUT Barber Shop | Milano",
  description:
    "Barbiere moderno a Milano. Tagli maschili, rasature e cura della barba. Via delle Forze Armate, 81 · 20147 Milano. Tel: 377 324 9299",
  keywords: ["barbiere Milano", "taglio uomo", "rasatura", "fade Milano", "first cut barber"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), Arial, sans-serif" }}>{children}</body>
    </html>
  )
}
