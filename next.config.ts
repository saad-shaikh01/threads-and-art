import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Order flow lives on the existing PHP system for now.
      { source: "/order", destination: "https://www.threadsandarts.com/signup.php", permanent: false },
      { source: "/order.php", destination: "https://www.threadsandarts.com/signup.php", permanent: false },
    ];
  },
};

export default nextConfig;
