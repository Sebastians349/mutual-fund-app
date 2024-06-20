// server.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Load the Swagger document
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));

let subscriptions = [
  { id: 1, name: 'Subscription 1', amount: 1000, date: '2024-01-01' },
  { id: 2, name: 'Subscription 2', amount: 2000, date: '2024-01-02' },
];

let redemptions = [
  { id: 1, name: 'Redemption 1', amount: 500, date: '2024-01-10' },
  { id: 2, name: 'Redemption 2', amount: 1500, date: '2024-01-15' },
];

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Get all subscriptions
app.get('/subscriptions', (req, res) => {
  res.json(subscriptions);
});

// Get a subscription by ID
app.get('/subscriptions/:id', (req, res) => {
  const subscription = subscriptions.find(s => s.id === parseInt(req.params.id));
  if (!subscription) return res.status(404).send('Subscription not found.');
  res.json(subscription);
});

// Create a new subscription
app.post('/subscriptions', (req, res) => {
  const newSubscription = {
    id: subscriptions.length ? subscriptions[subscriptions.length - 1].id + 1 : 1,
    ...req.body
  };
  subscriptions.push(newSubscription);
  res.status(201).json(newSubscription);
});

// Update a subscription by ID
app.put('/subscriptions/:id', (req, res) => {
  const subscription = subscriptions.find(s => s.id === parseInt(req.params.id));
  if (!subscription) return res.status(404).send('Subscription not found.');

  Object.assign(subscription, req.body);
  res.json(subscription);
});

// Delete a subscription by ID
app.delete('/subscriptions/:id', (req, res) => {
  const subscriptionIndex = subscriptions.findIndex(s => s.id === parseInt(req.params.id));
  if (subscriptionIndex === -1) return res.status(404).send('Subscription not found.');

  subscriptions.splice(subscriptionIndex, 1);
  res.json({ message: 'Subscription deleted successfully.' });
});

// Get all redemptions
app.get('/redemptions', (req, res) => {
  res.json(redemptions);
});

// Get a redemption by ID
app.get('/redemptions/:id', (req, res) => {
  const redemption = redemptions.find(r => r.id === parseInt(req.params.id));
  if (!redemption) return res.status(404).send('Redemption not found.');
  res.json(redemption);
});

// Create a new redemption
app.post('/redemptions', (req, res) => {
  const newRedemption = {
    id: redemptions.length ? redemptions[redemptions.length - 1].id + 1 : 1,
    ...req.body
  };
  redemptions.push(newRedemption);
  res.status(201).json(newRedemption);
});

// Update a redemption by ID
app.put('/redemptions/:id', (req, res) => {
  const redemption = redemptions.find(r => r.id === parseInt(req.params.id));
  if (!redemption) return res.status(404).send('Redemption not found.');

  Object.assign(redemption, req.body);
  res.json(redemption);
});

// Delete a redemption by ID
app.delete('/redemptions/:id', (req, res) => {
  const redemptionIndex = redemptions.findIndex(r => r.id === parseInt(req.params.id));
  if (redemptionIndex === -1) return res.status(404).send('Redemption not found.');

  redemptions.splice(redemptionIndex, 1);
  res.json({ message: 'Redemption deleted successfully.' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
