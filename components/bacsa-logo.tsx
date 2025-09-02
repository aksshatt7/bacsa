interface BACSALogoProps {
  variant?: "full-color" | "white" | "white-color"
  format?: "horizontal" | "square" | "isotype"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function BACSALogo({
  variant = "full-color",
  format = "horizontal",
  size = "md",
  className = "",
}: BACSALogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-24",
  }

  if (format === "isotype") {
    return (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
        <div className="relative">
          {/* B for Biotechnology */}
          <div
            className={`
            w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg
            ${
              variant === "full-color"
                ? "bg-bacsa-mountain-meadow"
                : variant === "white"
                  ? "bg-white text-gray-900"
                  : "bg-bacsa-mountain-meadow"
            }
          `}
          >
            B
          </div>
          {/* C for Computer Science */}
          <div
            className={`
            absolute -bottom-1 -right-1 w-6 h-6 rounded flex items-center justify-center text-white font-bold text-sm
            ${
              variant === "full-color"
                ? "bg-bacsa-botticelli"
                : variant === "white"
                  ? "bg-white text-gray-900"
                  : "bg-bacsa-botticelli"
            }
          `}
          >
            C
          </div>
        </div>
      </div>
    )
  }

  if (format === "square") {
    return (
      <div className={`${sizeClasses[size]} ${className} flex flex-col items-center justify-center space-y-1`}>
        <div className="flex items-center space-x-1">
          {/* B for Biotechnology */}
          <div
            className={`
            w-6 h-6 rounded flex items-center justify-center text-white font-bold text-sm
            ${
              variant === "full-color"
                ? "bg-bacsa-mountain-meadow"
                : variant === "white"
                  ? "bg-white text-gray-900"
                  : "bg-bacsa-mountain-meadow"
            }
          `}
          >
            B
          </div>
          {/* C for Computer Science */}
          <div
            className={`
            w-6 h-6 rounded flex items-center justify-center text-white font-bold text-sm
            ${
              variant === "full-color"
                ? "bg-bacsa-botticelli"
                : variant === "white"
                  ? "bg-white text-gray-900"
                  : "bg-bacsa-botticelli"
            }
          `}
          >
            C
          </div>
        </div>
        <div
          className={`
          brand-title text-lg font-bold
          ${variant === "white" ? "text-white" : variant === "white-color" ? "text-white" : "text-bacsa-cloud-burst"}
        `}
        >
          BACSA
        </div>
      </div>
    )
  }

  // Horizontal format (default)
  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center space-x-3`}>
      <div className="flex items-center space-x-1">
        {/* B for Biotechnology */}
        <div
          className={`
          w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg
          ${
            variant === "full-color"
              ? "bg-bacsa-mountain-meadow"
              : variant === "white"
                ? "bg-white text-gray-900"
                : "bg-bacsa-mountain-meadow"
          }
        `}
        >
          B
        </div>
        {/* C for Computer Science */}
        <div
          className={`
          w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg
          ${
            variant === "full-color"
              ? "bg-bacsa-botticelli"
              : variant === "white"
                ? "bg-white text-gray-900"
                : "bg-bacsa-botticelli"
          }
        `}
        >
          C
        </div>
      </div>
      <div
        className={`
        brand-title text-2xl font-bold
        ${variant === "white" ? "text-white" : variant === "white-color" ? "text-white" : "text-bacsa-cloud-burst"}
      `}
      >
        BACSA
      </div>
    </div>
  )
}
