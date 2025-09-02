"use client"

import { useState } from "react"

export function AboutMission() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Flip Card Container */}
          <div
            className="flip-card-container relative w-full max-w-2xl h-[600px] perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div
              className={`flip-card w-full h-full relative transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
            >
              {/* Front Side - Who We Are */}
              <div className="flip-card-front absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/images/bacsa-team-event.jpg"
                      alt="BACSA team members at a professional conference with the official BACSA banner"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Who We Are</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      At BACSA, we bring together passionate students from biotechnology and computer science to create
                      innovative solutions for real-world challenges. We foster collaborative research projects,
                      organize cutting-edge workshops, and host networking events that bridge the gap between biological
                      sciences and computational technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Side - Our Mission */}
              <div className="flip-card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-bacsa-mountain-meadow to-bacsa-botticelli rounded-3xl shadow-xl overflow-hidden">
                <div className="h-full flex flex-col">
                  {/* Image Section - Updated with BACSA Conference image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/images/bacsa-conference-2025.jpg"
                      alt="BACSA Conference 2025 presentation screen in a modern auditorium with professional setup"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bacsa-cloud-burst/40 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">Our Mission</h2>
                    <p className="text-lg leading-relaxed opacity-95 drop-shadow-sm">
                      Our mission is to empower students of all skill levels and experiences to foster their passion and
                      accelerate their career in biotechnology and computer science. Through hands-on workshops,
                      industry panels, hackathons, and collaborative research opportunities, we provide the best
                      resources and connections for University of Toronto students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .flip-card {
          cursor: pointer;
        }
        
        .flip-card-front {
          z-index: 2;
        }
        
        .flip-card-back {
          z-index: 1;
        }
        
        /* Smooth hover transition */
        .flip-card-container:hover .flip-card {
          transform: rotateY(180deg);
        }
        
        /* Enhanced shadow on hover */
        .flip-card-container:hover {
          filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15));
        }
        
        /* Accessibility: Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .flip-card {
            transition: none;
          }
          .flip-card-container:hover .flip-card {
            transform: none;
          }
          /* Show both sides stacked for reduced motion users */
          .flip-card-back {
            position: relative;
            transform: none;
            margin-top: 2rem;
          }
        }
        
        /* Mobile optimization */
        @media (max-width: 768px) {
          .flip-card-container {
            height: 500px;
          }
          
          .flip-card-front .h-64,
          .flip-card-back .h-64 {
            height: 12rem;
          }
          
          .flip-card-front .p-8,
          .flip-card-back .p-8 {
            padding: 1.5rem;
          }
          
          .flip-card-front h2,
          .flip-card-back h2 {
            font-size: 2rem;
          }
          
          .flip-card-front p,
          .flip-card-back p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
