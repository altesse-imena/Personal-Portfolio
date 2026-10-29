/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


const nextConfig = {
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Optimize image loading
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
  },
  
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Reduce bundle size
  transpilePackages: ['resend'],
  
  // Enable static exports where possible
  output: 'standalone',

  // Send the old Vercel address to the custom domain so search engines index one site
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'altesse-imena.vercel.app' }],
        destination: 'https://altesseimena.com/:path*',
        permanent: true,
      },
    ]
  },
};

module.exports = withBundleAnalyzer(nextConfig);
