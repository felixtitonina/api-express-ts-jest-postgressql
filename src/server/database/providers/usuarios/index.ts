import * as create from './create';
import * as getByEmail from './getByEmail';

export const usuariosProvider = {
  ...create,
  ...getByEmail,
};
