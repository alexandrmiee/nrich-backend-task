// @ts-check
const { clickHouseConfig } = require('../config/clickhouse.config');

const mysql = require('mysql');

module.exports.pool = mysql.createPool({
  connectionLimit: clickHouseConfig.connectionLimit,
  host: clickHouseConfig.host,
  user: clickHouseConfig.user,
  database: clickHouseConfig.database,
  port: clickHouseConfig.port,
});
