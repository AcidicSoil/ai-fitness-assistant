const request = require('supertest');
const app = require('../api/index');

describe('API server', () => {
  test('GET /api/hello returns greeting', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from AI Fitness Assistant!' });
  });
});
