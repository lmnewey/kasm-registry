/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Testing a Kasm Technologies Registry',
    description: 'a test of Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://lmnewey.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
