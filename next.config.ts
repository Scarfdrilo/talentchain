import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      root: "/home/scarf/.openclaw/workspace/proyectos/talentchain",
    },
  },
};

export default nextConfig;
