/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  },
}

export default nextConfig
