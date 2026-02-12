import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[
      {
        hostname:"**",
        protocol:"https"
      }
    ]
  }
};

export default nextConfig;
