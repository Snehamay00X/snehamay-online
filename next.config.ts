/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/truechat",
        destination: "https://www.google.com",
      },
    ];
  },
};

module.exports = nextConfig;
