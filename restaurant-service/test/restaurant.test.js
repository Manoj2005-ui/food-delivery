const request = require('supertest');
const app = require('../src/index');

describe('Restaurant Service', () => {
  test('get restaurants', async () => {
    const res = await request(app).get('/restaurants');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
