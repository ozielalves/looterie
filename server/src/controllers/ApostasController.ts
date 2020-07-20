import { Request, Response } from 'express';
import knex from '../database/connection';

class ApostasController {

  async create (request: Request, response: Response) {
      const { id_ficha, id_sorteio } = request.body;
    
      await knex('apostas').insert({ id_ficha, id_sorteio });
      
      return response.json({ success: true })
  }
};

export default ApostasController;