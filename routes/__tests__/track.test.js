//@ts-check
const { app } = require('../../app');
const request = require('supertest');

describe('tracker tests', () => {
  it('should return 204', async () => {
    await request(app).get('/track?id=1').expect(204);
  });

  it('should return 400', async () => {
    await request(app).get('/track').expect(400);
  });
});
