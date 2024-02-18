import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cidadesConrtoller } from './../controller';

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
export { router };
