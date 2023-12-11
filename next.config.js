/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["images.weserv.nl", "live.staticflickr.com"],
    // path: "/",
  },
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
