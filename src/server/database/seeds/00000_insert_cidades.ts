import { Knex } from 'knex';
import { ETableNames } from '../EtableNames';
import { cidadesSeed } from '../../shared/util/cidadesSeed';
import dotenv from 'dotenv';
dotenv.config();

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  //   await knex(ETableNames.cidade).del();

  const [{ count }] = await knex(ETableNames.cidade).count<[{ count: number }]>(
    '* as count',
  );

  if (!Number.isInteger(count) || Number(count) > 0) return;

  const cidadesToInsert = cidadesSeed.map((nomeDaCidade) => ({
    nome:
      `${process.env.NODE_ENV !== 'production' ? process.env.NODE_ENV + '_' : ''} ` +
      nomeDaCidade,
  }));

  // Inserts seed entries
  await knex(ETableNames.cidade).insert(cidadesToInsert);
};
