/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname:"avatars.githubusercontent.com"
      },
      {
        hostname:"https://www.youtube.com"
      },
    ],
  },
};

module.exports = nextConfig;
