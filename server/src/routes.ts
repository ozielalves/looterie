import express from 'express';
import UsersController from './controllers/UsersConstroller';
import FichasController from './controllers/FichasController';
import SorteiosController from './controllers/SorteiosConstroller';
import ApostasController from './controllers/ApostasController';

const routes = express.Router();

const userController = new UsersController();
const fichasController = new FichasController(); 
const sorteiosController = new SorteiosController();
const apostasController = new ApostasController();


routes.get('/sorteiosabertos', sorteiosController.showOpen);

routes.get('/sorteiosfechados', sorteiosController.showClosed);

routes.get('/sorteios/:id_user', sorteiosController.show);

routes.get('/sorteios', sorteiosController.showAll);
// REMAKE
routes.get('/sorteiospremiados/:id_user', sorteiosController.showAwarded);

routes.get('/sorteioapostadores/:id_sorteio', sorteiosController.showBettors);

routes.post('/sorteios', sorteiosController.create);

routes.put('/sorteios/:id', sorteiosController.update);

routes.put('/looterie/:id_sorteio', sorteiosController.sorteia);

routes.get('/fichas/:id_user', fichasController.show);

routes.put('/fichas', fichasController.update);

routes.post('/fichas', fichasController.create);

routes.get('/users/:id', userController.showUser);

routes.get('/users', userController.show);

routes.post('/users', userController.create);

routes.put('/users/:id', userController.update);

routes.post('/apostas', apostasController.create);

export default routes;