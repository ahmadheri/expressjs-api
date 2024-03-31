import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(201).send({ msg: "hello"})
});

app.get('/api/users', (req, res) => {
  res.send([
    { id: 1, username: "Heri"},
    { id: 2, username: "Ahmad"},
    { id: 3, username: "Darwis"}
  ]);
});

app.get('/api/products', (req, res) => {
  res.send([
    { id: 1, name: "Samsung Galaxy M33", price: 2999000}
  ]);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
});