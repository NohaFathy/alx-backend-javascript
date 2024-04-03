const assert = require('assert');
const request = require('supertest');
const app = require('./api');

describe('GET /available_payments', () => {
  it('should return the list of available payments', async () => {
    const response = await request(app).get('/available_payments');
    assert.strictEqual(response.status, 200);
    assert.deepStrictEqual(response.body, {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    });
  });
});

describe('POST /login', () => {
  it('should return a welcome message with the username', async () => {
    const userName = 'john_doe';
    const response = await request(app)
      .post('/login')
      .send({ userName });
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.text, `Welcome ${userName}`);
  });
});

