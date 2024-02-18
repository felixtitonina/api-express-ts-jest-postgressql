import { ETableNames } from '../../EtableNames';
import { Knex } from '../../knex';
import { ICidade } from '../../models';

export const create = async (
  cidade: Omit<ICidade, 'id'>,
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.cidade)
      .insert(cidade)
      .returning('id');
    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number') {
      return result;
    }
    return new Error('error.message');
  } catch (error) {
    console.log('🚀 ~ error:', error);
    return new Error('error.message');
  }
};
