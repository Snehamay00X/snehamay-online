/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // 🔥 MUST BE FIRST — Next.js assets
      {
        source: "/_next/:path*",
        destination: "https://frontend-puce-omega-74.vercel.app/_next/:path*",
      },

      // TrueChat app routes
      {
        source: "/projects/truechat/:path*",
        destination: "https://frontend-puce-omega-74.vercel.app/:path*",
      },
      {
        source: "/projects/truechat",
        destination: "https://frontend-puce-omega-74.vercel.app",
      },
    ];
  },
};

module.exports = nextConfig;
