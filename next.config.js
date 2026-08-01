/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['gravatar.com', 'images.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
