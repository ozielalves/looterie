import Knex from 'knex';

export async function up(knex: Knex) { // CRIAR A TABELA
  return knex.schema.createTable('sorteios', table => {
    table.increments('id').primary();
    table.integer('id_user') // CHAVE ESTRANGEIRA
      .notNullable()
      .references('id')
      .inTable('users');
    table.integer('limite_ficha');
    table.string('rede_social');
    table.date('data_sorteio').notNullable();
    table.string('image').notNullable();
    table.integer('aberto', 1).defaultTo('1');
    table.string('title').notNullable();
    table.string('description').notNullable();
    })
}

export async function down(knex: Knex) { // VOLTAR ATRÁS
  return knex.schema.dropTable('sorteios');
}