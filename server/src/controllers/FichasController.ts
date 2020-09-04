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

/*   async update (req: Request, res: Response) {
    const trx = await knex.transaction();
    const fichas = await trx('fichas').select('id');
    const apostas = await trx('apostas').where('id_ficha', ficha.id).select('id_sorteio','id_ficha');
    fichas.map( async ficha => {
      const apostas = await trx('apostas').where('id_ficha', ficha.id).select('id_sorteio','id_ficha').first();
      if (apostas){
        apostas.map( async aposta => {
          await trx('fichas').where('id', ficha.id).update({id_sorteio: aposta.id_sorteio});
        });  
      }
      apostas.map( async aposta => {
        if (aposta.id_ficha === ficha.id){
          await trx('fichas').where('id', ficha.id).update({id_sorteio: aposta.id_sorteio});
        }
      }); 
      const apostas = await trx('apostas').where('id_ficha', ficha.id).select('id_sorteio','id_ficha').first();
    });

    let apostasFichas : Number[] = [];
    let apostasFichasSorteios : Number[] = [];
    const apostas = await trx('apostas').select('id_sorteio','id_ficha');
    apostas.map( async aposta => {
      apostasFichas.push(Number(aposta.id_ficha))
      apostasFichasSorteios.push(Number(aposta.id_sorteio))
    });

    apostasFichas.map( async ficha => {
      apostasFichasSorteios.map( async sorteio => {
        await trx('fichas').where('id', ficha).update({id_sorteio: sorteio});
      })
    })

    await trx.commit();
  }*/
}; 

export default FichasController;