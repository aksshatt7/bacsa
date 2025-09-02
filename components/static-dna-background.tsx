"use client"

import Image from "next/image"

interface StaticDNABackgroundProps {
  className?: string
  opacity?: number
}

export function StaticDNABackground({ className = "", opacity = 0.15 }: StaticDNABackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <Image
        src="/images/dna-helix-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        style={{ opacity }}
        priority={false}
        quality={85}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-900/20" />
    </div>
  )
}
