import { ETableNames } from '../../EtableNames';
import { Knex } from '../../knex';
import { IPessoa } from '../../models';

export const getAll = async (
  page: number,
  limit: number,
  filter: string,
): Promise<IPessoa[] | Error> => {
  try {
    const result = await Knex(ETableNames.pessoa)
      .select('*')
      .where('nomeCompleto', 'like', `%${filter}%`)
      .offset((page - 1) * limit) // (1 * 10)
      .limit(limit);
    return result;
  } catch (error) {
    console.log('🚀 ~ error:', error);
    return new Error('Erro ao consultar os registros');
  }
};
