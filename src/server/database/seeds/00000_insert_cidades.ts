import { Knex } from 'knex';
import { ETableNames } from '../EtableNames';
import { cidades } from '../../shared/util/cidades';

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  //   await knex(ETableNames.cidade).del();

  const [{ count }] = await knex(ETableNames.cidade).count<[{ count: number }]>(
    '* as count',
  );

  if (!Number.isInteger(count) || Number(count) > 0) return;

  const cidadesToInsert = cidades.map((nomeDaCidade) => ({
    nome: nomeDaCidade,
  }));

  // Inserts seed entries
  await knex(ETableNames.cidade).insert(cidadesToInsert);
};
