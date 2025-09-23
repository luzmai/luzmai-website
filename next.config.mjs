/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for Azure Static Web Apps
  output: 'export',
  trailingSlash: true,
  distDir: 'build',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
