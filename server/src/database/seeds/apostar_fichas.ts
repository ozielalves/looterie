import Knex from 'knex';

export async function seed(knex: Knex) {
  const trx = await knex.transaction()
  await trx('apostas').insert([
    { id_sorteio: '1', id_ficha: '1', premiado: 0},
    { id_sorteio: '1', id_ficha: '2', premiado: 0},
    { id_sorteio: '1', id_ficha: '3', premiado: 0},
    { id_sorteio: '2', id_ficha: '16', premiado: 0},
    { id_sorteio: '2', id_ficha: '17', premiado: 0},
    { id_sorteio: '2', id_ficha: '4', premiado: 0},
    { id_sorteio: '2', id_ficha: '5', premiado: 0},
    { id_sorteio: '3', id_ficha: '6', premiado: 0},
    { id_sorteio: '3', id_ficha: '18', premiado: 0},
    { id_sorteio: '4', id_ficha: '7', premiado: 0},
    { id_sorteio: '4', id_ficha: '19', premiado: 0}
  ]);

  const used_fichas = trx('apostas').select('id_ficha', 'id_sorteio');
}