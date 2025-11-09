const express = require('express');
const app = express();

const restaurants = [
  { id: 1, name: 'Pizza Planet', items: ['Cheese Pizza', 'Veg Pizza'] },
  { id: 2, name: 'Burger Hub', items: ['Veg Burger', 'Chicken Burger'] }
];

app.get('/restaurants', (req, res) => res.json(restaurants));

app.get('/restaurant/:id', (req, res) => {
  const id = Number(req.params.id);
  const restaurant = restaurants.find(r => r.id === id);
  if (!restaurant) return res.status(404).json({ error: 'not found' });
  res.json(restaurant);
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

if (require.main === module) {
  const port = process.env.PORT || 3002;
  app.listen(port, () => console.log(`Restaurant Service running on ${port}`));
}

module.exports = app;
