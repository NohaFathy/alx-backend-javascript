const express = require('express');

const app = express();

app.use(express.json());

// Endpoint to handle GET /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Endpoint to handle POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.json({ message: `Welcome ${userName}` });
});

// Start the server
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
