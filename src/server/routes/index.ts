import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  cidadesConrtoller,
  pessoasConrtoller,
  usuariosConrtoller,
} from './../controller';
import { ensureAuthenticated } from '../shared/middleware';

const router = Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.CREATED).send({
    message: 'ola mundo',
  });
});

router.get(
  '/cidades',
  ensureAuthenticated,
  cidadesConrtoller.getAllQueryValidation,
  cidadesConrtoller.getAll,
);

router.get(
  '/cidades/:id',
  ensureAuthenticated,
  cidadesConrtoller.getByIdValidation,
  cidadesConrtoller.getById,
);

router.put(
  '/cidades/:id',
  ensureAuthenticated,
  cidadesConrtoller.updateByIdValidation,
  cidadesConrtoller.updateById,
);

router.post(
  '/cidades',
  ensureAuthenticated,
  cidadesConrtoller.createBodyValidation,
  cidadesConrtoller.create,
);

router.delete(
  '/cidades/:id',
  ensureAuthenticated,
  cidadesConrtoller.deleteByIdValidation,
  cidadesConrtoller.deleteById,
);

router.get(
  '/pessoas',
  ensureAuthenticated,
  pessoasConrtoller.getAllQueryValidation,
  pessoasConrtoller.getAll,
);

router.get(
  '/pessoas/:id',
  ensureAuthenticated,
  pessoasConrtoller.getByIdValidation,
  pessoasConrtoller.getById,
);

router.put(
  '/pessoas/:id',
  ensureAuthenticated,
  pessoasConrtoller.updateByIdValidation,
  pessoasConrtoller.updateById,
);

router.post(
  '/pessoas',
  ensureAuthenticated,
  pessoasConrtoller.createBodyValidation,
  pessoasConrtoller.create,
);

router.delete(
  '/pessoas/:id',
  ensureAuthenticated,
  pessoasConrtoller.deleteByIdValidation,
  pessoasConrtoller.deleteById,
);

router.post(
  '/entrar',
  usuariosConrtoller.signInBodyValidation,
  usuariosConrtoller.signIn,
);

router.post(
  '/cadastrar',
  usuariosConrtoller.signUpBodyValidation,
  usuariosConrtoller.signUp,
);

export { router };
