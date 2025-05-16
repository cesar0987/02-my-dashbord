import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pokeapi.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
        port: "",
      },
    ]
  }
};
export default nextConfig;
