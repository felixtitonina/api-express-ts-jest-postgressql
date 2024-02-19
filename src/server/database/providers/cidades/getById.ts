import { ETableNames } from '../../EtableNames';
import { Knex } from '../../knex';
import { ICidade } from '../../models';

export const getById = async (id: number): Promise<ICidade | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .select('*')
      .where('id', '=', id)
      .first();
    if (result) return result;
    return new Error('Registro não encontrado.');
  } catch (error) {
    console.log('🚀 ~ error:', error);
    return new Error('Error ap consultar o registro.');
  }
};
