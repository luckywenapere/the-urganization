import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@libsql/client', 'libsql'],
  turbopack: {
    // Empty config to silence the warning
  },
};

export default nextConfig;