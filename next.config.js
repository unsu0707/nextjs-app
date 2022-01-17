module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old/:path*",
        destination: "/new/:path*",
        permanent: false,
      },
    ];
  },
};
