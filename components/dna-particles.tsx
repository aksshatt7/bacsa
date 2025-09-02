"use client"

import { useEffect, useRef } from "react"

interface DNAParticlesProps {
  className?: string
  opacity?: number
}

export function DNAParticles({ className = "", opacity = 0.15 }: DNAParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // DNA particle system
    class DNAParticle {
      x: number
      y: number
      z: number
      originalX: number
      originalY: number
      originalZ: number
      color: string
      size: number
      strand: number

      constructor(index: number, total: number) {
        const t = (index / total) * Math.PI * 6 // 6 full rotations
        const progress = index / total

        this.strand = index % 2
        const offset = this.strand * Math.PI
        const radius = 80

        this.originalX = Math.cos(t + offset) * radius
        this.originalY = progress * canvas.height - canvas.height * 0.1
        this.originalZ = Math.sin(t + offset) * radius

        this.x = this.originalX
        this.y = this.originalY
        this.z = this.originalZ

        this.color = this.strand === 0 ? "#3b82f6" : "#14b8a6"
        this.size = Math.random() * 2 + 1
      }

      update(time: number) {
        // Gentle rotation and floating motion
        const rotationSpeed = 0.0005
        const floatSpeed = 0.001

        this.x = this.originalX * Math.cos(time * rotationSpeed) - this.originalZ * Math.sin(time * rotationSpeed)
        this.z = this.originalX * Math.sin(time * rotationSpeed) + this.originalZ * Math.cos(time * rotationSpeed)
        this.y = this.originalY + Math.sin(time * floatSpeed + this.strand * Math.PI) * 10
      }

      draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
        const screenX = centerX + this.x
        const screenY = centerY + this.y

        // Simple depth-based opacity
        const depth = (this.z + 100) / 200
        const alpha = Math.max(0.1, Math.min(0.8, depth))

        ctx.beginPath()
        ctx.fillStyle =
          this.color +
          Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.arc(screenX, screenY, this.size * depth, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: DNAParticle[] = []
    const particleCount = Math.min(300, Math.floor((canvas.width * canvas.height) / 5000)) // Adaptive particle count

    for (let i = 0; i < particleCount; i++) {
      particles.push(new DNAParticle(i, particleCount))
    }

    // Animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / (2 * window.devicePixelRatio)
      const centerY = canvas.height / (2 * window.devicePixelRatio)

      particles.forEach((particle) => {
        particle.update(time)
        particle.draw(ctx, centerX, centerY)
      })

      // Draw connecting lines between nearby particles (optional, for DNA structure)
      ctx.strokeStyle = "#3b82f620"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length - 1; i++) {
        const p1 = particles[i]
        const p2 = particles[i + 1]

        if (p1.strand !== p2.strand) continue

        const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

        if (distance < 50) {
          ctx.beginPath()
          ctx.moveTo(centerX + p1.x, centerY + p1.y)
          ctx.lineTo(centerX + p2.x, centerY + p2.y)
          ctx.stroke()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
