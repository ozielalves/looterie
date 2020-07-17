import express from 'express';
import knex from './database/connection'

const routes = express.Router();

routes.get('/sorteiosabertos', async (request, response) => {
  const sorteiosAbertos = await knex('sorteios').where('aberto', '=', 1).select('*');

  //const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
  const serializedSorteiosAbertos = sorteiosAbertos.map(sorteio => {
    return {
      title: sorteio.title,
      rede_social: sorteio.rede_social,
      description: sorteio.description,
      image_url: `http://localhost:3333/uploads/${sorteio.image}`,
      data_sorteio: sorteio.data_sorteio,
      limite_ficha: sorteio.limite_ficha,
      id_user: sorteio.id_user,
      id: sorteio.id
    }
  })
  response.json(serializedSorteiosAbertos);
});

routes.get('/sorteiosfechados', async (request, response) => {
  const sorteiosFechados = await knex('sorteios').where('aberto', '=', 0).select('*');
  
  const serializedSorteiosFechados = sorteiosFechados.map(sorteio => {
    return {
      title: sorteio.title,
      rede_social: sorteio.rede_social,
      description: sorteio.description,
      image_url: `http://localhost:3333/uploads/${sorteio.image}`,
      data_sorteio: sorteio.data_sorteio,
      limite_ficha: sorteio.limite_ficha,
      id_user: sorteio.id_user,
      id: sorteio.id
    }
  })
  response.json(serializedSorteiosFechados);
});

routes.get('/sorteios/:id_user', async (request, response) => {
  const id = Number(request.params.id_user);
    
  const sorteios = await knex('sorteios').where('id_user', '=', id).select('*');
  
  const serializedSorteios = sorteios.map(sorteio => {
    return {
      title: sorteio.title,
      rede_social: sorteio.rede_social,
      description: sorteio.description,
      image_url: `http://localhost:3333/uploads/${sorteio.image}`,
      data_sorteio: sorteio.data_sorteio,
      limite_ficha: sorteio.limite_ficha,
      id_user: sorteio.id_user,
      id: sorteio.id
    }
  })
  response.json(serializedSorteios);
});

routes.get('/sorteiospremiados/:id_user', async (request, response) => {
  const id = Number(request.params.id_user);
    
  const sorteiosPremiados = await knex('sorteios')
  .join('apostas', 'apostas.id_sorteio', 'id')
  .where('premiado', '=', 1,)
  .join('fichas', 'fichas.id', 'id_ficha')
  .where('id_user', '=', id).select('*');
  
  const serializedSorteiosPremiados = sorteiosPremiados.map(sorteio => {
    return {
      title: sorteio.title,
      rede_social: sorteio.rede_social,
      description: sorteio.description,
      image_url: `http://localhost:3333/uploads/${sorteio.image}`,
      data_sorteio: sorteio.data_sorteio,
      limite_ficha: sorteio.limite_ficha,
      id_user: sorteio.id_user,
      id: sorteio.id
    }
  })
  response.json(serializedSorteiosPremiados);
});

routes.get('/sorteioapostadores/:id_sorteio', async (request, response) => {
  const id = Number(request.params.id_sorteio);
    
  const apostadores = await knex('aspotas')
  .join('fichas', 'fichas.id', 'id_fichas')
  .join('users', 'users.id', 'fichas.id_user')
  .where('id_sorteio', '=', id)
  .select('*');

  response.json(apostadores);
});

routes.get('/fichas/:id_user', async (request, response) => {
  const id = Number(request.params.id_user);
  const userFichas = await knex('fichas').where('id_user', '=', id).select('*');

  response.json(userFichas);
});

routes.get('/users', async (request, response) => {
  const data = request.body;
  
  const users = await knex('users').select('*');

  return response.json(users);
});

export default routes;