import Image from "next/image"
import Link from "next/link"

interface LogoImageProps {
  variant?: "white" | "dark"
  size?: "sm" | "md" | "lg" | "xl" | "xxl"
  className?: string
}

export function LogoImage({ variant = "white", size = "md", className = "" }: LogoImageProps) {
  const sizeClasses = {
    sm: "h-16", // Increased from h-10
    md: "h-24", // Increased from h-16 - much bigger for header
    lg: "h-32", // Increased from h-20 - very prominent
    xl: "h-40", // Increased from h-24 - extremely prominent
    xxl: "h-48", // Increased from h-28 - maximum prominence
  }

  const logoSrc = variant === "white" ? "/images/bacsa-logo-white.png" : "/images/bacsa-logo-white.png"

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} relative w-auto min-w-[200px] transition-transform duration-200 hover:scale-105`}
      >
        <Image
          src={logoSrc || "/placeholder.svg"}
          alt="BACSA - Biotechnology And Computer Science Association"
          width={400} // Increased from 280 for much wider logo
          height={120} // Increased from 90 for better proportions
          className="h-full w-auto object-contain"
          priority
          quality={100}
        />
      </div>
    </Link>
  )
}
