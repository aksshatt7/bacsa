"use client"

// ============================================================================
// SPONSOR LOGO DATA - ADD YOUR SPONSOR LOGOS HERE
// ============================================================================
// To add sponsor logos, update the 'sponsors' array below with your sponsor information.
// Each sponsor object should have:
//   - id: unique identifier (string)
//   - name: sponsor company name (string)
//   - logo: path to logo image file (string | null)
//     * Place logo images in the /public/sponsors/ directory
//     * Use paths like "/sponsors/company-logo.png" or "/sponsors/company-logo.svg"
//   - position: "center" for central node, or "surrounding" for outer nodes
//
// IMPORTANT: The network graphic has 7 nodes total:
//   - 1 CENTRAL node (larger, for main/platinum sponsor)
//   - 6 SURROUNDING nodes (for other sponsors)
//
// Example with actual logos:
// const sponsors = [
//   { id: "center", name: "Platinum Sponsor", logo: "/sponsors/platinum-logo.png", position: "center" as const },
//   { id: "sponsor1", name: "Gold Sponsor 1", logo: "/sponsors/gold1-logo.png", position: "surrounding" as const },
//   { id: "sponsor2", name: "Gold Sponsor 2", logo: "/sponsors/gold2-logo.png", position: "surrounding" as const },
//   { id: "sponsor3", name: "Silver Sponsor 1", logo: "/sponsors/silver1-logo.png", position: "surrounding" as const },
//   { id: "sponsor4", name: "Silver Sponsor 2", logo: "/sponsors/silver2-logo.png", position: "surrounding" as const },
//   { id: "sponsor5", name: "Bronze Sponsor 1", logo: "/sponsors/bronze1-logo.png", position: "surrounding" as const },
//   { id: "sponsor6", name: "Bronze Sponsor 2", logo: "/sponsors/bronze2-logo.png", position: "surrounding" as const },
// ]
// ============================================================================

const sponsors = [
  // CENTRAL NODE - Add your main/platinum sponsor logo here
  // Replace null with the path to your logo, e.g., "/sponsors/main-sponsor.png"
  { id: "center", name: "Main Sponsor", logo: null, position: "center" as const },
  
  // SURROUNDING NODES - Add up to 6 sponsor logos here
  // Replace null with paths to your logos, e.g., "/sponsors/sponsor1.png"
  { id: "sponsor1", name: "Sponsor 1", logo: null, position: "surrounding" as const },
  { id: "sponsor2", name: "Sponsor 2", logo: null, position: "surrounding" as const },
  { id: "sponsor3", name: "Sponsor 3", logo: null, position: "surrounding" as const },
  { id: "sponsor4", name: "Sponsor 4", logo: null, position: "surrounding" as const },
  { id: "sponsor5", name: "Sponsor 5", logo: null, position: "surrounding" as const },
  { id: "sponsor6", name: "Sponsor 6", logo: null, position: "surrounding" as const },
]

// ============================================================================
// CIRCLE POSITIONS - EDIT HERE TO CHANGE WHERE CIRCLES APPEAR
// ============================================================================
// This array controls the position of all circles in the network graphic.
// 
// To edit positions:
//   - cx: horizontal position (0-400, where 200 is center)
//   - cy: vertical position (0-300, where 150 is center)
//   - r: radius of the circle (40 for center, 30 for surrounding)
//   - id: unique identifier (don't change unless you know what you're doing)
//
// Current layout: Random/scattered positions for organic network look
// SVG viewBox is 0 0 400 300, so keep coordinates within those bounds
// ============================================================================
const nodePositions = [
  { id: "center", cx: 200, cy: 150, r: 40 }, // Central node (larger) - KEEP THIS CENTERED
  
  // Surrounding nodes - RANDOM/SCATTERED positions (edit these values to reposition)
  // Make them more random by varying distances and angles from center
  // Coordinates must be within SVG viewBox: x (0-400), y (0-300)
  { id: "node1", cx: 75, cy: 55, r: 30 },    // Top-left - random position
  { id: "node2", cx: 325, cy: 60, r: 30 },   // Top-right - random position
  { id: "node3", cx: 55, cy: 155, r: 30 },   // Left - random position
  { id: "node4", cx: 345, cy: 145, r: 30 },  // Right - random position
  { id: "node5", cx: 110, cy: 240, r: 30 },  // Bottom-left - random position
  { id: "node6", cx: 290, cy: 250, r: 30 },  // Bottom-right - random position
]

export default function SponsorsSection() {
  // Get sponsor for each position
  const centerSponsor = sponsors.find((s) => s.position === "center")
  const surroundingSponsors = sponsors.filter((s) => s.position === "surrounding")

  return (
    <section id="sponsors" className="relative w-full bg-white py-20 md:py-32">
      {/* Soft teal gradient haze near edges - more visible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-50/40 via-transparent to-teal-50/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal-50/30 via-transparent to-teal-50/30" />

      <div className="relative mx-auto max-w-[1000px] px-6">
        {/* Heading */}
        <h2 className="text-center text-[48px] font-extrabold tracking-tight text-slate-900 md:text-[64px]">
          Sponsors
        </h2>

        {/* ======================================================================
            SPONSOR NETWORK GRAPHIC - COMMENTED OUT
            ======================================================================
            To show sponsors when ready:
            1. Uncomment the section below (remove the comment markers around it)
            2. Update the 'sponsors' array at the top of this file with logo paths
            3. Adjust nodePositions if needed for better layout
            ====================================================================== */}
        {/* 
        <div className="relative mt-12 flex justify-center">
          <svg
            width="400"
            height="300"
            viewBox="0 0 400 300"
            className="w-full max-w-[700px]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="centerClip">
                <circle cx="200" cy="150" r="35" />
              </clipPath>
              {nodePositions.slice(1).map((pos) => (
                <clipPath key={`clip-${pos.id}`} id={`clip-${pos.id}`}>
                  <circle cx={pos.cx} cy={pos.cy} r="25" />
                </clipPath>
              ))}
            </defs>

            {nodePositions.slice(1).map((pos) => (
              <line
                key={`center-to-${pos.id}`}
                x1="200"
                y1="150"
                x2={pos.cx}
                y2={pos.cy}
                stroke="white"
                strokeWidth="2.5"
                opacity="0.9"
              />
            ))}

            {nodePositions.slice(1).flatMap((pos1, i) =>
              nodePositions.slice(1).slice(i + 1).map((pos2) => (
                <line
                  key={`${pos1.id}-to-${pos2.id}`}
                  x1={pos1.cx}
                  y1={pos1.cy}
                  x2={pos2.cx}
                  y2={pos2.cy}
                  stroke="#14b8a6"
                  strokeWidth="2"
                  opacity="0.7"
                />
              ))
            )}

            <g>
              <circle
                cx="200"
                cy="150"
                r="40"
                fill="#14b8a6"
                className="drop-shadow-md"
              />
              {centerSponsor?.logo ? (
                <>
                  <circle cx="200" cy="150" r="35" fill="white" />
                  <image
                    href={centerSponsor.logo}
                    x="165"
                    y="115"
                    width="70"
                    height="70"
                    preserveAspectRatio="xMidYMid meet"
                    clipPath="url(#centerClip)"
                  />
                </>
              ) : (
                <circle cx="200" cy="150" r="35" fill="#0d9488" opacity="0.3" />
              )}
            </g>

            {nodePositions.slice(1).map((pos, index) => {
              const sponsor = surroundingSponsors[index]
              return (
                <g key={pos.id}>
                  <circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r="30"
                    fill="#5eead4"
                    className="drop-shadow-md"
                  />
                  {sponsor?.logo ? (
                    <>
                      <circle cx={pos.cx} cy={pos.cy} r="25" fill="white" />
                      <image
                        href={sponsor.logo}
                        x={pos.cx - 22}
                        y={pos.cy - 22}
                        width="44"
                        height="44"
                        preserveAspectRatio="xMidYMid meet"
                        clipPath={`url(#clip-${pos.id})`}
                      />
                    </>
                  ) : (
                    <circle
                      cx={pos.cx}
                      cy={pos.cy}
                      r="25"
                      fill="#2dd4bf"
                      opacity="0.3"
                    />
                  )}
                </g>
              )
            })}
          </svg>
        </div>
        */}

        {/* Coming Soon Placeholder */}
        <div className="mt-12 flex justify-center">
          <div className="rounded-full bg-teal-100 px-12 py-6">
            <p className="text-center text-2xl font-semibold text-teal-700 md:text-3xl">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
