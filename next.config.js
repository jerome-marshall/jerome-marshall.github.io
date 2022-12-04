/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["images.weserv.nl", "live.staticflickr.com"],
    // path: "/",
  },
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
