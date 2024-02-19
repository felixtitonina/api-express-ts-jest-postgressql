import type { Knex } from 'knex';
import { ETableNames } from '../EtableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.usuario, (table) => {
      table.bigIncrements('id').primary().index();
      table.string('nome').notNullable().checkLength('>=', 3);
      table.string('senha').notNullable().checkLength('>=', 6);
      table.string('email').index().unique().notNullable().checkLength('>=', 5);

      table.comment('Tabela usada para armazenar usuarios do sistema.');
    })
    .then(() => {
      console.log(`# Create table ${ETableNames.usuario}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.usuario).then(() => {
    console.log(`# Drop table ${ETableNames.usuario}`);
  });
}
