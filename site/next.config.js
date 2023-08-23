/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm as a Dev playground',
    description: 'Warning, Unsafe workspaces in use. Using root user negates the zero trust benefits of kasm. These workspaces are being used as small dev environments only.',
    icon: '/img/logo.svg',
    listUrl: 'https://lmnewey.github.io/kasm-registry/',
    contactUrl: 'https://DontCallMe.com/IWillCallYou',
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
