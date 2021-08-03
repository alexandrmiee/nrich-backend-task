module.exports.appConfig = {
  // ipv4 or ipv6?
  host: process.env.APP_HOST || '0.0.0.0',
  port: +process.env.APP_PORT || 3000,
};
