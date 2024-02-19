import { ETableNames } from '../../EtableNames';
import { Knex } from '../../knex';
import { ICidade } from '../../models';

export const getAll = async (
  page: number,
  limit: number,
  filter: string,
  id = 0,
): Promise<ICidade[] | Error> => {
  try {
    if (id > 0 /** && result.every((item) => item.id !== id) */) {
      const resultById = await Knex(ETableNames.cidade)
        .select('*')
        .where('id', '=', id)
        .first();

      if (!resultById) return [];
      return [resultById];
    }

    const result = await Knex(ETableNames.cidade)
      .select('*')
      .where('id', Number(id))
      .orWhere('nome', 'like', `%${filter}%`)
      .offset((page - 1) * limit) // (1 * 10)
      .limit(limit);
    return result;
  } catch (error) {
    console.log('🚀 ~ error:', error);
    return new Error('Erro ao consultar os registros');
  }
};
