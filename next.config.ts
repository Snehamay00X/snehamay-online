/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/truechat",
        destination: "https://frontend-puce-omega-74.vercel.app",
      },
      {
        source: "/projects/truechat/:path*",
        destination: "https://frontend-puce-omega-74.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
