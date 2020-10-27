import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert([
    { name: 'Oziel', lastname: 'Alves', email: 'ozielalves7@gmail.com', password: '123456'},
    { name: 'André', lastname: 'Stabile',email: 'andrestabile1@hotmail.com', password: '123456'},
    { name: 'Gabrielle', lastname: 'Duarte',email: 'gabiduarte@gmail.com', password: '123456'},
    { name: 'Amanda', lastname: 'Lopes',email: 'amandrafts@gmail.com', password: '123456'},
    { name: 'Tifany', lastname: 'Maignan',email: 'tifanym@gmail.com', password: '123456'},
  ]);
}