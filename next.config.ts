/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/truechat",
        destination: "https://truechat.vercel.app",
      },
      {
        source: "/projects/truechat/:path*",
        destination: "https://truechat.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
