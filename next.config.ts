import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vondel",
  images: { unoptimized: true },
};

export default nextConfig;
