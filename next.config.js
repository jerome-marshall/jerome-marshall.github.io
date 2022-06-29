/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["images.weserv.nl", "live.staticflickr.com"],
    // path: "/",
  },
};

module.exports = nextConfig;
