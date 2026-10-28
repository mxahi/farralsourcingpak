import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/service", destination: "/services", permanent: true },
      ...["bedding", "towel", "hospitality", "apparel", "garments"].map((s) => ({
        source: `/${s}`,
        destination: `/products/${s}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
