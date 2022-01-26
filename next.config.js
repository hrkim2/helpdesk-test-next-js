module.exports = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/qnas",
        destination: `http://localhost:1337/api/qnas?pagination%5BpageSize%5D=5&fields=qId%2CqTitle%2CqUser%2CqStatusCd%2CregistDate%2CreadCount&populate=common_code&sort=id:desc`
      },{
        source: "/qnas/:qId",
        destination: `http://localhost:1337/api/qnas/:qId`
      }
    ];
  },
};