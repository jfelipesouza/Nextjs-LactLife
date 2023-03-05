/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: true
  },
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig
