import express from 'express';
import knex from './database/connection';
import UsersController from './controllers/UsersConstroller';
import FichasController from './controllers/FichasController';
import SorteiosController from './controllers/SorteiosConstroller';

const routes = express.Router();

const userController = new UsersController();
const fichasController = new FichasController();
const sorteiosController = new SorteiosController();


routes.get('/sorteiosabertos', sorteiosController.showOpen);

routes.get('/sorteiosfechados', sorteiosController.showClosed);

routes.get('/sorteios/:id_user', sorteiosController.show);

routes.get('/sorteiospremiados/:id_user', sorteiosController.showAwarded);

routes.get('/sorteioapostadores/:id_sorteio', sorteiosController.showBettors);

routes.post('/sorteios', sorteiosController.create);

routes.get('/fichas/:id_user', fichasController.show);

routes.post('/fichas', fichasController.create);

routes.get('/users/:id', userController.showUser);

routes.get('/users/', userController.show);

routes.post('/users', userController.create);

export default routes;