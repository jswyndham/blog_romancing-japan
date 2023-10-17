/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  
  async redirects() {
    return [
      {
        source: '/posts/the-top-5-historical-temples-in-kyoto',
        destination: '/posts/top-5-historical-temples-in-kyoto', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
