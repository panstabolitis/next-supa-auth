/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { serverActions: true },
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*.googleusercontent.com",
            port: "",
            pathname: "**"
          },
          {
            protocol: "https",
            hostname: "*.wikimedia.org",
            port: "",
            pathname: "**"
          }
        ],
    },
};

module.exports = nextConfig
