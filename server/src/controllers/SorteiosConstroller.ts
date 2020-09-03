import { Request, Response } from 'express';
import knex from '../database/connection';

class SorteiosController {
  async showOpen (request:Request, response:Response) {
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
  }

  async showClosed (request:Request, response:Response){
    const sorteiosFechados = await knex('sorteios').where('aberto', 0).select('*');
    
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
  }

  async showAll (request: Request, response: Response) {
    const allSorteios = await knex('sorteios').select('*');
    response.json(allSorteios);
  }

  async show (request:Request, response:Response ) {
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
        id: sorteio.id,
        aberto: sorteio.aberto
      }
    })
    response.json(serializedSorteios);
  }

  async showAwarded (request:Request, response:Response ) {
    const id = Number(request.params.id_user);
    
    const sorteiosPremiados = await knex('sorteios')
    .join('apostas', {'sorteios.id' : 'apostas.id_sorteio'})
    .where('premiado', 1)
    .join('fichas', {'apostas.id_ficha' : 'fichas.id'})
    .where('id_user', id).select('*');
    
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
  }

  async showBettors (request:Request, response:Response ) {
    const id = Number(request.params.id_sorteio);
    const apostadores = await knex('apostas')
    .join('fichas', {'apostas.id_ficha': 'fichas.id'})
    .join('users', {'fichas.id_user' : 'users.id'})
    .where('apostas.id_sorteio', id)
    .distinct()
    .select('*');

    response.json(apostadores);
  }

  async create (request: Request, response: Response) {
    const {
      id_user,
      title,
      description,
      limite_ficha,
      rede_social,
      data_sorteio,
      image
    } = request.body;
  
    const newSorteio = await knex('sorteios').insert({
      id_user,
      title,
      description,
      limite_ficha,
      rede_social,
      data_sorteio,
      image
    });
    
    response.json(newSorteio);
  }

  async update (request: Request, response: Response) {
    const id = request.params.id;
    const { title, description, image, data_sorteio } = request.body;
    
    const updatedSorteio = await knex('sorteios').where({ 'id' : id }).update({ title, description, image, data_sorteio });

    response.json(updatedSorteio);
  }

  async sorteia (request: Request, response: Response) {
    const id_sorteio = Number(request.params.id_sorteio);
    const trx = await knex.transaction();
    // Get Apostadores do sorteio
    const apostadores = await trx('apostas')
    .join('fichas', {'apostas.id_ficha': 'fichas.id'})
    .join('users', {'fichas.id_user' : 'users.id'})
    .where('apostas.id_sorteio', id_sorteio)
    .distinct()
    .select('id_ficha','id_user', 'name', 'lastname');
    // Randon ganhador
    const winner = apostadores[Math.floor(Math.random() * apostadores.length)];
    const winnerName = winner.name + ' ' + winner.lastname;

    // Set Ganhador do Sorteio
    await trx('apostas').where('id_ficha', Number(winner.id_ficha)).update({premiado: 1});
    
    // Fechar Sorteio
    await trx('sorteios').where('id', id_sorteio).update({aberto: 0})

    // Fechando Transação
    await trx.commit();
    
    response.json(winnerName);
  }

}


export default SorteiosController;