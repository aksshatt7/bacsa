/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
