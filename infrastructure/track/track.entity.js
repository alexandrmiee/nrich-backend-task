// @ts-check
const { format } = require('date-fns');

/**
 *
 * @param {object} data
 * @param {Date} data.date
 * @param {string} data.eventId
 * @param {any} data.trackerId
 * @param {string} data.ip
 * @param {string} data.userId
 * @param {string} data.userAgent
 * @param {string} data.url
 * @returns Entity
 */

module.exports.mapToEntity = (data) => ({
  date: format(data.date, 'yyyy-MM-dd'),
  date_time: format(data.date, 'yyyy-MM-dd HH.mm.ss'),
  event_id: data.eventId,
  tracker_id: data.trackerId,
  ip: data.ip,
  user_id: data.userId,
  user_agent: data.userAgent,
  url: data.url,
});
