import Knex from 'knex';

export async function up(knex: Knex) { // CRIAR A TABELA
  return knex.schema.createTable('apostas', table => {
    table.integer('id_sorteio')
      .notNullable()
      .references('id')
      .inTable('sorteios');
    table.integer('id_ficha')
      .primary()
      .notNullable()
      .references('id')
      .inTable('fichas');
    table.integer('premiado', 1);
})
}

export async function down(knex: Knex) { // VOLTAR ATRÁS
  return knex.schema.dropTable('apostas');
}