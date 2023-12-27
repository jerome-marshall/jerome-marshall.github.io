/** @type {import("next").NextConfig} */
const config = {
    output: "export",
    reactStrictMode: true,
    images: {
      loader: "custom",
      domains: ["images.weserv.nl", "live.staticflickr.com"],
      // path: "/",
    },
    swcMinify: true,
};

export default config;