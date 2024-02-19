import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cidadesConrtoller, pessoasConrtoller } from './../controller';

const router = Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.CREATED).send({
    message: 'ola mundo',
  });
});

router.get(
  '/cidades',
  cidadesConrtoller.getAllQueryValidation,
  cidadesConrtoller.getAll,
);

router.get(
  '/cidades/:id',
  cidadesConrtoller.getByIdValidation,
  cidadesConrtoller.getById,
);

router.put(
  '/cidades/:id',
  cidadesConrtoller.updateByIdValidation,
  cidadesConrtoller.updateById,
);

router.post(
  '/cidades',
  cidadesConrtoller.createBodyValidation,
  cidadesConrtoller.create,
);

router.delete(
  '/cidades/:id',
  cidadesConrtoller.deleteByIdValidation,
  cidadesConrtoller.deleteById,
);

router.get(
  '/pessoas',
  pessoasConrtoller.getAllQueryValidation,
  pessoasConrtoller.getAll,
);

router.get(
  '/pessoas/:id',
  pessoasConrtoller.getByIdValidation,
  pessoasConrtoller.getById,
);

router.put(
  '/pessoas/:id',
  pessoasConrtoller.updateByIdValidation,
  pessoasConrtoller.updateById,
);

router.post(
  '/pessoas',
  pessoasConrtoller.createBodyValidation,
  pessoasConrtoller.create,
);

router.delete(
  '/pessoas/:id',
  pessoasConrtoller.deleteByIdValidation,
  pessoasConrtoller.deleteById,
);

export { router };
