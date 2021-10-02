module.exports = {
  images: {
    domains: ["https://www.holmcreations.com/test-api/"],
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
