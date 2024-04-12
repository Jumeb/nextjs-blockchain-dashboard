/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
        NEXT_PUBLIC_X_API_KEY: process.env.NEXT_PUBLIC_X_API_KEY,
        // Add other environment variables here
      }
    async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}:slug*`,
      },
    ];
  },
};

export default nextConfig;
