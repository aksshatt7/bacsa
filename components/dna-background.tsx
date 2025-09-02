"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function DNAHelix({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null!)
  const light = useRef<THREE.PointLight>(null!)

  // Generate DNA double helix points
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const color1 = new THREE.Color("#3b82f6") // Blue
    const color2 = new THREE.Color("#14b8a6") // Teal

    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 8 // 8 full rotations
      const y = (i / count) * 20 - 10 // Spread along Y axis

      // Create double helix structure
      const radius = 2
      const strand = i % 2 // Alternate between two strands
      const offset = strand * Math.PI // Offset second strand by 180 degrees

      const x = Math.cos(t + offset) * radius
      const z = Math.sin(t + offset) * radius

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Alternate colors between strands
      const color = strand === 0 ? color1 : color2
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return [positions, colors]
  }, [count])

  // Animate the DNA helix
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.1
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
    }
    if (light.current) {
      light.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 5
      light.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 5
    }
  })

  return (
    <>
      <pointLight ref={light} position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
      <Points ref={mesh} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          opacity={0.6}
          size={0.05}
          sizeAttenuation={true}
          vertexColors
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </>
  )
}

function DNAScene() {
  return (
    <>
      <DNAHelix count={1500} />
      <ambientLight intensity={0.2} />
    </>
  )
}

interface DNABackgroundProps {
  className?: string
  opacity?: number
}

export function DNABackground({ className = "", opacity = 0.3 }: DNABackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]} // Limit pixel ratio for performance
        performance={{ min: 0.5 }} // Adaptive performance
      >
        <DNAScene />
      </Canvas>
    </div>
  )
}
