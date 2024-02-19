import { ETableNames } from '../../EtableNames';
import { Knex } from '../../knex';
import { IUsuario } from '../../models';

export const getByEmail = async (email: string): Promise<IUsuario | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select('*')
      .where('email', '=', email)
      .first();
    if (result) return result;
    return new Error('Registro não encontrado.');
  } catch (error) {
    console.log('🚀 ~ error:', error);
    return new Error('Error ao consultar o registro.');
  }
};
