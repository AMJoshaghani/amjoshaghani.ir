import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: "/amjoshaghani.ir",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
