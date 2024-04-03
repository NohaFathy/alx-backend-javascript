const request = require('supertest');
const app = require('./api');

describe('Test the /login endpoint', () => {
  it('should return a welcome message with the username', async () => {
    const response = await request(app)
      .post('/login')
      .send({ userName: 'john_doe' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome john_doe');
  });
});

describe('Test the /available_payments endpoint', () => {
  it('should return the list of available payments', async () => {
    const response = await request(app)
      .get('/available_payments');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    });
  });
});
