import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('fichas').insert([
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '2'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'},
    { id_user: '3'}
  ]);
} 