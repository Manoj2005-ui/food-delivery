const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.post('/signup', (req, res) => {
  const { name, email } = req.body || {};
  if (!email) return res.status(400).json({ error: 'email required' });
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ error: 'user exists' });
  const user = { id: users.length + 1, name: name || '', email };
  users.push(user);
  res.status(201).json({ message: 'user created', user });
});

app.get('/users', (req, res) => res.json(users));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`User Service running on ${port}`));
}

module.exports = app;
