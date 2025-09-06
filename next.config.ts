/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // was experimental.typedRoutes —> now stable
  typedRoutes: true,
};

export default nextConfig;
