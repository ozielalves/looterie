import { Request, Response, response } from 'express';
import knex from '../database/connection';

class UsersController {
  async create (request: Request, response: Response) {
    const {
      name,
      lastname,
      email,
      password
    } = request.body;
  
    await knex('users').insert({
      name,
      lastname,
      email,
      password
    });
    
    return response.json({ success: true })
  }

  async showUser (request:Request, response: Response) {
    const id = Number(request.params.id);

    const user = await knex('users').where('id', id).first().select('name','lastname','email');
    const userFichas = await knex('fichas').where('id_user', '=', id).select('*');
    
    if( !user ) {
      return response.status(400).json({ message: 'User not found on DataBase.'});
    }

    response.json({user, userFichas});
  }

  async show (request:Request, response: Response) {
  
    const users = await knex('users').select('*');

    response.json(users);
  }

  /*
  async index(request: Request, response: Response) {
    // Filtro: {Query Params}
    const { city, uf, items } = request.query;

    const parsedItems = String(items).split(',').map(item => Number(item.trim()))

    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    return response.json(points);
  }

  
  async create(request: Request, response: Response) {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    const trx = await knex.transaction();

    const point = {
      image: 'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }

    // PRIMEIRA QUERY DE INSERÇÃO
    const insertedIds = await trx('points').insert(point);
    
    const point_id = insertedIds[0];
    
    const point_items = items.map((item_id:number) => {
        return {
            item_id,
            point_id,
        };
    })
    
    // UMA SEGUNDA QUERY QUE DEPENDE DA PRIMEIRA -HMM
    await trx('point_items').insert(point_items);
    
    await trx.commit();

    return response.json({
      id: point_id,
      ... point,
    });
  }*/
}

export default UsersController;