import type { Knex } from 'knex';
import { ETableNames } from '../EtableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.pessoa, (table) => {
      table.bigIncrements('id').primary().index();
      table.string('nomeCompleto').index().notNullable();
      table.string('email').unique().index().notNullable();

      table
        .bigInteger('cidadeId')
        .index()
        .notNullable()
        .references('id')
        .inTable(ETableNames.cidade)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      table.comment('Tabela usada para armazenar pessoas do sistema.');
    })
    .then(() => {
      console.log(`# Create table ${ETableNames.pessoa}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.pessoa).then(() => {
    console.log(`# Drop table ${ETableNames.pessoa}`);
  });
}
