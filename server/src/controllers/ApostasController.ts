import { Request, Response } from 'express';
import knex from '../database/connection';

class ApostasController {
  async create (request: Request, response: Response) {
    const { id_user, id_sorteio, n_fichas } = request.body;

    const trx = await knex.transaction();
    
    const userFichas = await trx('fichas').where('id_user', id_user).select('id');

    if (n_fichas > userFichas.length || !userFichas) {
      return response.status(400).json({ message: 'Not enought tickets for this user.'});
    }

    userFichas.map( async fichaID => {
      await trx('apostas').insert({ id_ficha: fichaID, id_sorteio });

      await trx('ficha').where({ id: fichaID }).update({ id_sorteio });
    })
    
    await trx.commit();

    response.json(userFichas);
  }
};

export default ApostasController;