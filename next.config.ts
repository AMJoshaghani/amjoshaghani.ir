import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: 'export',
  output: "standalone",
  reactStrictMode: true,
  basePath: "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
