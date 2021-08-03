//@ts-check
const { app } = require('../../app');
const request = require('supertest');

describe('stats tests', () => {
  it('should return 200', async () => {
    await request(app).get('/stats?tracker_id=1&from=2021-08-01&to=2021-08-04').expect(200);
  });
});
