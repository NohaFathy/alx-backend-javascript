const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

// Endpoint to return available payments
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;

