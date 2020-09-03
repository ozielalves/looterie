import { Request, Response } from 'express';
import knex from '../database/connection';

class FichasController {
  async show (request: Request, response: Response) {
    const id = Number(request.params.id_user);
    const userFichas = await knex('fichas').where('id_user', '=', id).select('*');

    response.json(userFichas);
  };

  async create (request: Request, response: Response) {
    const id_user = request.body;
  
    await knex('fichas').insert({ id_user });
    
    return response.json({ success: true })
  }

  async update (req: Request, res: Response) {
    const trx = await knex.transaction();
    
    const fichas = trx('fichas').select('id');
    (await fichas).map( async ficha => {
      const sorteio = trx('apostas').where('id_ficha', ficha.id).select('id_sorteio')
      trx('fichas').where('id', ficha.id).update({id_sorteio: sorteio})
    });

    await trx.commit();
  }
};

export default FichasController;