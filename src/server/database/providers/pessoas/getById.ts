import { ETableNames } from '../../EtableNames';
import { Knex } from '../../knex';
import { IPessoa } from '../../models';

export const getById = async (id: number): Promise<IPessoa | Error> => {
  try {
    const result = await Knex(ETableNames.pessoa)
      .select('*')
      .where('id', '=', id)
      .first();
    if (result) return result;
    return new Error('Registro não encontrado.');
  } catch (error) {
    console.log('🚀 ~ error:', error);
    return new Error('Error ao consultar o registro.');
  }
};
