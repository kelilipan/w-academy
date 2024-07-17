import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/lib/sw.ts",
  swDest: "public/sw.js",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const composed = withSerwist(nextConfig);

export default composed;
