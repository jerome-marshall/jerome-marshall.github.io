/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

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
  