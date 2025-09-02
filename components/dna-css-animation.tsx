"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface DNACSSAnimationProps {
  className?: string
  opacity?: number
}

export function DNACSSAnimation({ className = "", opacity = 0.1 }: DNACSSAnimationProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (prefersReducedMotion) {
    return null // Respect user's motion preferences
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="dna-container">
        {/* Generate DNA strands */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="dna-strand"
            style={
              {
                "--delay": `${i * 0.1}s`,
                "--offset": `${i * 18}deg`,
              } as React.CSSProperties
            }
          >
            <div className="dna-base dna-base-1" />
            <div className="dna-base dna-base-2" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .dna-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 100vh;
          animation: dna-rotate 20s linear infinite;
        }
        
        .dna-strand {
          position: absolute;
          top: 0;
          left: 50%;
          width: 100%;
          height: 100%;
          transform-origin: center;
          transform: rotateY(var(--offset)) translateZ(0);
          animation-delay: var(--delay);
        }
        
        .dna-base {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: dna-float 4s ease-in-out infinite;
        }
        
        .dna-base-1 {
          left: 20%;
          background: linear-gradient(45deg, #3b82f6, #60a5fa);
          animation-delay: 0s;
        }
        
        .dna-base-2 {
          right: 20%;
          background: linear-gradient(45deg, #14b8a6, #5eead4);
          animation-delay: 2s;
        }
        
        @keyframes dna-rotate {
          from { transform: translate(-50%, -50%) rotateY(0deg); }
          to { transform: translate(-50%, -50%) rotateY(360deg); }
        }
        
        @keyframes dna-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.9; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .dna-container,
          .dna-base {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
