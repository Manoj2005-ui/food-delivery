const request = require('supertest');
const app = require('../src/index');

describe('Order Service basic', () => {
  test('reject missing fields', async () => {
    const res = await request(app).post('/order').send({});
    expect(res.statusCode).toBe(400);
  });
});
