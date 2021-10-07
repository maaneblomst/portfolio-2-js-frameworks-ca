module.exports = {
  images: {
    domains: ["https://test.holmcreations.com/"],
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/admin",
        permanent: false,
      },
    ];
  },
};
