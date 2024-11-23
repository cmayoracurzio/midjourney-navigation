import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "storage.tally.so",
      },
    ],
  },
}

export default nextConfig
