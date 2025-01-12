import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app'], // Add your Vercel deployment domain here
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/auth/callback',
        destination: '/api/auth/callback',
      },
    ]
  },
}

export default nextConfig
