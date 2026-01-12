import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory, uncomment and set the basePath:
  basePath: '/front-escore-ko-2',
  trailingSlash: true,
};

export default nextConfig;
