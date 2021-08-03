// @ts-check
const { pool } = require('../connection');
const { TRACKING_TABLE } = require('../constants');

/**
 *
 * @param {object} item
 * @param {string} item.date
 * @param {string} item.date_time
 * @param {string} item.event_id
 * @param {any} item.tracker_id
 * @param {string} item.ip
 * @param {string} item.user_id
 * @param {string} item.user_agent
 * @param {string} item.url
 * @returns Promise<{ results, fields }>
 */
module.exports.insertItem = (item) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO ${TRACKING_TABLE} SELECT ?, ?, ?, ?, ?, ?, ?, ?, value FROM pg.trackers WHERE id = ?`,
      [...Object.values(item), item.tracker_id],
      (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve({ results, fields });
        }
      },
    );
  });
};
