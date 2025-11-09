const request = require('supertest');
const app = require('../src/index');

describe('User Service', () => {
  test('signup flow', async () => {
    const res = await request(app).post('/signup').send({ name: 'Tanu', email: 'tanu@example.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.user.email).toBe('tanu@example.com');
  });
});
