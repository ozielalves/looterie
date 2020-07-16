import express from 'express';

const routes = express.Router();

const users = [
  'Oziel',
  'André',
  'Lucas',
  'Gabrielle'
];

routes.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
  
  response.json(filteredUsers)
});

routes.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

routes.post('/users', (request, response) => {
  const data = request.body;
  
  const user ={
    name: data.name,
    lastname: data.lastname,
    email: data.email,
    password: data.password
  }

  return response.json(user);
});

export default routes;