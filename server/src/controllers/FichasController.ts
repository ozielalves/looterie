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
};

export default FichasController;