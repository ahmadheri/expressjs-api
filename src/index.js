import express, { response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "Heri"},
  { id: 2, username: "Ahmad"},
  { id: 3, username: "Darwis"}
];

app.get('/', (req, res) => {
  res.status(201).send({ msg: "hello"})
});

app.get('/api/users', (req, res) => {
  res.send(mockUsers);
});

app.get('/api/users/:id', (req, res) => {
  console.log(req.params)
  const parsedId = parseInt(req.params.id);
  console.log(parsedId)
  if (isNaN(parsedId)) return res.status(400).send({ msg: "bad request"});
  
  const findUser = mockUsers.find((user) => user.id == parsedId);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
})

app.get('/api/products', (req, res) => {
  res.send([
    { id: 1, name: "Samsung Galaxy M33", price: 2999000}
  ]);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
});