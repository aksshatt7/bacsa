"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogoImage } from "./logo-image"
import { useEffect, useState } from "react"

export function HeroOptimized() {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = "/images/dna-hero-background.jpg"
    img.onload = () => setImageLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden hero-section">
      {/* DNA Background Image with loading state */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url('/images/dna-hero-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: typeof window !== "undefined" && window.innerWidth > 768 ? "fixed" : "scroll",
        }}
      />

      {/* Fallback gradient background */}
      <div
        className={`absolute inset-0 bg-bacsa-dark-gradient transition-opacity duration-1000 ${imageLoaded ? "opacity-0" : "opacity-100"}`}
      />

      {/* Overlay for better text readability while preserving the beautiful blue DNA tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-bacsa-cloud-burst/50 via-transparent to-bacsa-cloud-burst/50" />

      {/* Additional subtle overlay to maintain brand consistency */}
      <div className="absolute inset-0 bg-bacsa-cloud-burst/15" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* BACSA Logo and Tagline */}
        <div className="mb-8 md:mb-12">
          <div className="flex justify-center mb-6 md:mb-8">
            <LogoImage variant="white" size="xl" />
          </div>

          {/* Brand Tagline - exactly as in manual */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-6 md:mb-8 flex-wrap gap-y-2">
            <div className="text-bacsa-mountain-meadow brand-title text-lg md:text-xl tracking-wider drop-shadow-lg">
              INNOVATION
            </div>
            <div className="w-2 h-2 bg-white rounded-full hidden sm:block drop-shadow-lg"></div>
            <div className="text-white brand-title text-lg md:text-xl tracking-wider drop-shadow-lg">PEOPLE</div>
            <div className="w-2 h-2 bg-white rounded-full hidden sm:block drop-shadow-lg"></div>
            <div className="text-bacsa-botticelli brand-title text-lg md:text-xl tracking-wider drop-shadow-lg">
              KNOWLEDGE
            </div>
          </div>
        </div>

        {/* Main Heading - exactly as in manual */}
        <h1 className="brand-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-12 leading-tight drop-shadow-2xl">
          BIOTECHNOLOGY AND
          <br />
          <span className="text-bacsa-gradient drop-shadow-lg">COMPUTER SCIENCE</span>
          <br />
          ASSOCIATION
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-bacsa-gradient hover:opacity-90 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg brand-body font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href="/about">LEARN MORE</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-bacsa-cloud-burst px-6 md:px-8 py-3 md:py-4 text-base md:text-lg brand-body font-semibold rounded-lg backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href="/events">VIEW EVENTS</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
