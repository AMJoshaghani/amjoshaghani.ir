import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: 'export',
  target: 'serverless',
  reactStrictMode: true,
  basePath: "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
