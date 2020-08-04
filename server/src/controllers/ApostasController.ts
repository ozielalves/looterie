import { Request, Response } from 'express';
import knex from '../database/connection';

class ApostasController {
  async create (request: Request, response: Response) {
      const { id_sorteio, id_user, n_fichas } = request.params;

      var userFichasVector : Number[] = [];

      const trx = await knex.transaction();
      
      const userFichas = (await trx('fichas')
                        .where('id_user', id_user)
                        .select('fichas.id'))
                        .map(ficha => (userFichasVector.push(ficha)));
    
      //const userFichasSerialized = userFichas.map(ficha => (userFichasVector.push(ficha)));

      if( !userFichas ) {
        return response.status(400).json({ message: 'The user do not have enought token.'});
      }

      for (var i = 0; i == ((n_fichas as any)-1); i++) {

        const id_ficha = userFichasVector[i];
        
        await trx('apostas').insert({ id_ficha, id_sorteio });

        await trx('ficha').where({ id: id_ficha }).update({ id_sorteio });
      
      }

      return response.json({ success: true });
  }
};

export default ApostasController;