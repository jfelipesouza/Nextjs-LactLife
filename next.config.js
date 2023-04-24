/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: false
  },
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig
