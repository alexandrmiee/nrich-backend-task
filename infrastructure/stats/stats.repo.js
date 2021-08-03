// @ts-check
const { pool } = require('../connection');
const { TRACKING_TABLE } = require('../constants');

/**
 *
 * @param {string} id
 * @param {string|Date} from
 * @param {string|Date} to
 * @returns Promise<{ results, fields }>
 */
module.exports.countItems = (id, from, to) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT COUNT() as count FROM ${TRACKING_TABLE} WHERE tracker_id = ? AND date_time BETWEEN ? AND ?`,
      [id, from, to],
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
