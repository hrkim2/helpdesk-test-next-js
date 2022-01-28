const BASE_URL = 'http://localhost:1337';

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/qnas',
        destination: `${BASE_URL}/api/qnas`,
      },
      {
        source: '/qnas/:qId',
        destination: `${BASE_URL}/api/qnas/:qId`,
      },
    ];
  },
};
