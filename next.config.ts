import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "*",
    //     port: "",
    //     pathname: "",
    //   },
    // ],
    // domains: ["2023-24.rotaractgalgotias.org", "github.com", "freepik.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This wildcard allows all HTTPS hostnames
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
