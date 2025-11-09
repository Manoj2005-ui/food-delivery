const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

let orders = [];

app.post('/order', async (req, res) => {
  try {
    const { user, restaurantId, item } = req.body || {};
    if (!user || !restaurantId || !item) return res.status(400).json({ error: 'missing fields' });

    const r = await axios.get(`http://restaurant-service:3002/restaurant/${restaurantId}`);
    const restaurant = r.data;

    const order = { id: orders.length + 1, user, restaurantId, item, restaurantName: restaurant.name };
    orders.push(order);

    res.status(201).json({ message: 'order placed', order });
  } catch (err) {
    res.status(500).json({ error: 'order failed', details: err.message });
  }
});

app.get('/orders', (req, res) => res.json(orders));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

if (require.main === module) {
  const port = process.env.PORT || 3003;
  app.listen(port, () => console.log(`Order Service running on ${port}`));
}

module.exports = app;
