import { ETableNames } from '../../EtableNames';
import { Knex } from '../../knex';

export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.pessoa).where('id', '=', id).del();
    console.log('🚀 ~ deleteById ~ result:', result);
    if (result > 0) return;
    return new Error('Erro ao apagar o registro');
  } catch (error) {
    console.log('🚀 ~ error:', error);
    return new Error('Erro ao apagar o registro');
  }
};
