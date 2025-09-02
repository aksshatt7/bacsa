import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "BACSA",
  description:
    "University of Toronto's premier organization bridging biotechnology and computer science through innovation, people, and knowledge.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
