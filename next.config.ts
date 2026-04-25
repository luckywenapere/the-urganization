import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "community.urganize.app" }],
        destination: "https://chat.whatsapp.com/DGUGyC2GK3d5v6KPGw5aft",
        permanent: false,
      },
    ];
  },
  serverExternalPackages: ["@libsql/client", "libsql"],
  turbopack: {
    // Empty config to silence the warning
  },
};

export default nextConfig;
