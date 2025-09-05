import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "BACSA - Biotechnology And Computer Science Association",
  description:
    "University of Toronto's premier organization bridging biotechnology and computer science through innovation, people, and knowledge.",
  keywords: [
    "BACSA",
    "biotechnology",
    "computer science",
    "University of Toronto",
    "UofT",
    "bioinformatics",
    "computational biology",
    "student organization",
  ],
  authors: [{ name: "BACSA" }],
  creator: "BACSA",
  publisher: "BACSA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "BACSA - Biotechnology And Computer Science Association",
    description:
      "University of Toronto's premier organization bridging biotechnology and computer science through innovation, people, and knowledge.",
    url: "https://bacsa.ca",
    siteName: "BACSA",
    type: "website",
    images: [
      {
        url: "/images/bacsa-logo-official.png",
        width: 1200,
        height: 630,
        alt: "BACSA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BACSA - Biotechnology And Computer Science Association",
    description:
      "University of Toronto's premier organization bridging biotechnology and computer science through innovation, people, and knowledge.",
    images: ["/images/bacsa-logo-official.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
