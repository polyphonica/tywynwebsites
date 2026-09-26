import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/simple-sites",
        destination: "/work/starter-sites",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
