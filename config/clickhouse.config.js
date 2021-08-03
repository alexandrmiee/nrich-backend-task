module.exports.clickHouseConfig = {
  host: process.env.CH_HOST || 'localhost',
  port: +process.env.CH_PORT || 9004,
  user: process.env.CH_USER || 'default',
  database: process.env.CH_DB || 'dev',
  connectionLimit: +process.env.CH_CONNECTION_LIMIT || 10,
};
