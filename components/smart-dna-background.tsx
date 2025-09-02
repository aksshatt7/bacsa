"use client"

import { useEffect, useState } from "react"
import { DNABackground } from "./dna-background"
import { DNAParticles } from "./dna-particles"
import { DNACSSAnimation } from "./dna-css-animation"

interface SmartDNABackgroundProps {
  className?: string
  opacity?: number
}

export function SmartDNABackground({ className = "", opacity = 0.2 }: SmartDNABackgroundProps) {
  const [animationType, setAnimationType] = useState<"webgl" | "canvas" | "css" | "none">("css")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const detectCapabilities = () => {
      // Check for reduced motion preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setAnimationType("none")
        setIsLoaded(true)
        return
      }

      // Check device capabilities
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

      // Check for high-performance device
      const isHighPerformance =
        navigator.hardwareConcurrency >= 4 &&
        window.innerWidth >= 1024 &&
        !/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      if (gl && isHighPerformance) {
        setAnimationType("webgl")
      } else if (canvas.getContext("2d")) {
        setAnimationType("canvas")
      } else {
        setAnimationType("css")
      }

      setIsLoaded(true)
    }

    // Delay detection to avoid blocking initial render
    const timer = setTimeout(detectCapabilities, 100)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded || animationType === "none") {
    return null
  }

  const commonProps = { className, opacity }

  switch (animationType) {
    case "webgl":
      return <DNABackground {...commonProps} />
    case "canvas":
      return <DNAParticles {...commonProps} />
    case "css":
      return <DNACSSAnimation {...commonProps} />
    default:
      return null
  }
}
