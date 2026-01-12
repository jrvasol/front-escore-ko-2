import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory, set basePath
  // basePath: process.env.NODE_ENV === 'production' ? '/front-escore-ko-2' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/front-escore-ko-2' : '',
};

export default nextConfig;
