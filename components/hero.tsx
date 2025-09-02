"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Hero() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0)
  const [showStickFigure, setShowStickFigure] = useState(false)

  const fontStyles = [
    { family: "font-sans", weight: "font-black", style: "Helvetica" },
    { family: "font-serif", weight: "font-bold", style: "Times" },
    { family: "font-mono", weight: "font-extrabold", style: "Courier" },
    { family: "font-sans", weight: "font-black", style: "Arial" },
    { family: "font-serif", weight: "font-extrabold", style: "Georgia" },
    { family: "font-sans", weight: "font-bold", style: "Verdana" },
    { family: "font-mono", weight: "font-black", style: "Monaco" },
    { family: "font-serif", weight: "font-black", style: "Palatino" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fontStyles.length)
    }, 800) // Much faster - change every 0.8 seconds

    return () => clearInterval(interval)
  }, [fontStyles.length])

  useEffect(() => {
    // Start stick figure animation after component mounts
    const timer = setTimeout(() => {
      setShowStickFigure(true)
    }, 2000) // Start after 2 seconds

    // Repeat animation every 6 seconds (reduced from 10 seconds)
    const repeatTimer = setInterval(() => {
      setShowStickFigure(false)
      setTimeout(() => setShowStickFigure(true), 300) // Shorter gap between loops
    }, 6000) // Much more frequent animations

    return () => {
      clearTimeout(timer)
      clearInterval(repeatTimer)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Main Heading - Redesigned Layout with Bigger GAP */}
            <div className="mb-8 relative">
              <div className="flex items-center gap-8 mb-4 relative">
                <h1 className="brand-title text-3xl md:text-4xl lg:text-5xl text-bacsa-cloud-burst leading-tight relative">
                  Bridge The
                  {/* Stick Figure Animation - positioned directly above text - MUCH BIGGER */}
                  {showStickFigure && (
                    <div className="absolute inset-0 pointer-events-none overflow-visible">
                      <div className="stick-figure animate-stick-journey">
                        <svg
                          width="32"
                          height="44"
                          viewBox="0 0 32 44"
                          className="absolute drop-shadow-lg"
                          style={{ top: "-65px", left: "0px" }}
                        >
                          {/* Head - Much Bigger */}
                          <circle cx="16" cy="7" r="5" fill="#07AE97" stroke="#1D2452" strokeWidth="2" />
                          {/* Body - Longer and Thicker */}
                          <line x1="16" y1="12" x2="16" y2="28" stroke="#1D2452" strokeWidth="3" />
                          {/* Arms - individual arm animations - Longer and Thicker */}
                          <g className="arms">
                            <line
                              x1="16"
                              y1="18"
                              x2="9"
                              y2="23"
                              stroke="#1D2452"
                              strokeWidth="2.5"
                              className="arm-left"
                            />
                            <line
                              x1="16"
                              y1="18"
                              x2="23"
                              y2="13"
                              stroke="#1D2452"
                              strokeWidth="2.5"
                              className="arm-right"
                            />
                          </g>
                          {/* Running Legs - Longer and Thicker */}
                          <g className="running-legs">
                            <line
                              x1="16"
                              y1="28"
                              x2="10"
                              y2="38"
                              stroke="#1D2452"
                              strokeWidth="3"
                              className="leg-left"
                            />
                            <line
                              x1="16"
                              y1="28"
                              x2="22"
                              y2="38"
                              stroke="#1D2452"
                              strokeWidth="3"
                              className="leg-right"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  )}
                </h1>
                <span
                  className={`
                    text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-bacsa-cloud-burst leading-tight drop-shadow-2xl
                    transition-all duration-300 ease-out relative
                    ${fontStyles[currentFontIndex].family}
                    ${fontStyles[currentFontIndex].weight}
                    font-black
                  `}
                  style={{
                    fontFamily:
                      fontStyles[currentFontIndex].style === "Times"
                        ? "Times, 'Times New Roman', serif"
                        : fontStyles[currentFontIndex].style === "Courier"
                          ? "'Courier New', Courier, monospace"
                          : fontStyles[currentFontIndex].style === "Georgia"
                            ? "Georgia, 'Times New Roman', serif"
                            : fontStyles[currentFontIndex].style === "Arial"
                              ? "Arial, Helvetica, sans-serif"
                              : fontStyles[currentFontIndex].style === "Verdana"
                                ? "Verdana, Geneva, sans-serif"
                                : fontStyles[currentFontIndex].style === "Monaco"
                                  ? "Monaco, 'Lucida Console', monospace"
                                  : fontStyles[currentFontIndex].style === "Palatino"
                                    ? "'Palatino Linotype', Palatino, serif"
                                    : "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    textShadow: "0 8px 32px rgba(29, 36, 82, 0.4)",
                    filter: "brightness(1.1) contrast(1.1)",
                  }}
                >
                  GAP
                </span>
              </div>
            </div>

            {/* Subtitle - Made bigger and more prominent */}
            <p className="text-gray-700 text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed font-semibold">
              University of Toronto Biotechnology And Computer Science Association
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <button className="bg-bacsa-mountain-meadow hover:bg-bacsa-mountain-meadow/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Join Us
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-bacsa-mountain-meadow text-bacsa-mountain-meadow hover:bg-bacsa-mountain-meadow hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - BACSA Logo Only */}
          <div className="flex items-center justify-center lg:justify-end">
            {/* MASSIVE BACSA Logo - SUPER PROMINENT */}
            <div className="relative group">
              <img
                src="/images/bacsa-logo-hero-right.png"
                alt="BACSA - Biotechnology And Computer Science Association"
                className="h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] w-auto object-contain 
                         drop-shadow-2xl filter brightness-110 contrast-110 
                         transform hover:scale-105 transition-all duration-500 ease-out
                         animate-pulse-subtle"
              />

              {/* Glowing background effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-bacsa-mountain-meadow/20 to-bacsa-botticelli/20 
                            rounded-3xl blur-3xl scale-110 -z-10 opacity-60 animate-pulse"
              ></div>

              {/* Additional glow ring */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-bacsa-mountain-meadow/10 to-bacsa-botticelli/10 
                            rounded-full blur-2xl scale-125 -z-20 opacity-40"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stick-figure {
          position: absolute;
          z-index: 10;
        }

        .animate-stick-journey {
          animation: stick-journey 4s ease-in-out forwards;
        }

        @keyframes stick-journey {
          /* Running phase - consistent steps across "Bridge The" */
          0% {
            transform: translateX(-20px) translateY(0px);
            opacity: 1;
          }
          10% {
            transform: translateX(20px) translateY(-8px);
            opacity: 1;
          }
          20% {
            transform: translateX(60px) translateY(0px);
            opacity: 1;
          }
          30% {
            transform: translateX(100px) translateY(-8px);
            opacity: 1;
          }
          40% {
            transform: translateX(140px) translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateX(180px) translateY(-8px);
            opacity: 1;
          }
          /* End of "The" - prepare for giant leap */
          55% {
            transform: translateX(200px) translateY(0px);
            opacity: 1;
          }
          /* ONE GIANT LEAP to GAP */
          75% {
            transform: translateX(400px) translateY(-60px);
            opacity: 1;
          }
          90% {
            transform: translateX(520px) translateY(-25px);
            opacity: 1;
          }
          100% {
            transform: translateX(540px) translateY(-20px);
            opacity: 0;
          }
        }

        /* Individual leg animations - perfectly synchronized - Updated for bigger figure */
        .leg-left {
          animation: left-leg-sync 0.8s ease-in-out infinite;
          transform-origin: 16px 28px;
        }

        .leg-right {
          animation: right-leg-sync 0.8s ease-in-out infinite;
          transform-origin: 16px 28px;
        }

        @keyframes left-leg-sync {
          0% {
            transform: rotate(-12deg);
          }
          50% {
            transform: rotate(12deg);
          }
          100% {
            transform: rotate(-12deg);
          }
        }

        @keyframes right-leg-sync {
          0% {
            transform: rotate(12deg);
          }
          50% {
            transform: rotate(-12deg);
          }
          100% {
            transform: rotate(12deg);
          }
        }

        /* Individual arm animations - synchronized with OPPOSITE legs - Updated for bigger figure */
        .arm-left {
          animation: left-arm-sync 0.8s ease-in-out infinite;
          transform-origin: 16px 18px;
        }

        .arm-right {
          animation: right-arm-sync 0.8s ease-in-out infinite;
          transform-origin: 16px 18px;
        }

        /* Left arm moves with RIGHT leg (natural running motion) */
        @keyframes left-arm-sync {
          0% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(-15deg);
          }
          100% {
            transform: rotate(15deg);
          }
        }

        /* Right arm moves with LEFT leg (natural running motion) */
        @keyframes right-arm-sync {
          0% {
            transform: rotate(-15deg);
          }
          50% {
            transform: rotate(15deg);
          }
          100% {
            transform: rotate(-15deg);
          }
        }

        /* Accessibility: Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-stick-journey,
          .leg-left,
          .leg-right,
          .arm-left,
          .arm-right {
            animation: none;
          }
          .stick-figure {
            display: none;
          }
        }

        /* Hide on very small screens to avoid clutter */
        @media (max-width: 480px) {
          .stick-figure {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
