import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "accurateautoworks.ca" }],
        destination: "https://www.accurateautoworks.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
