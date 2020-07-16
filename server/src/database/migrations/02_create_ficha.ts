import Knex from 'knex';

export async function up(knex: Knex) { // CRIAR A TABELA
  return knex.schema.createTable('fichas', table => {
    table.increments('id').primary();
    table.integer('id_user')
      .notNullable()
      .references('id')
      .inTable('users');
    table.integer('id_sorteio')
      .references('id')
      .inTable('sorteios');
})
}

export async function down(knex: Knex) { // VOLTAR ATRÁS
  return knex.schema.dropTable('fichas');
}