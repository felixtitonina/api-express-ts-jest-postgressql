import * as express from 'express';
import { cidadesConrtoller } from '../../controller/ciddades';
import { ensureAuthenticated } from '../../shared/middleware';

const cidadeRouter = express.Router();

cidadeRouter.get(
  '/',
  ensureAuthenticated,
  cidadesConrtoller.getAllQueryValidation,
  cidadesConrtoller.getAll,
);

cidadeRouter.get(
  '/:id',
  ensureAuthenticated,
  cidadesConrtoller.getByIdValidation,
  cidadesConrtoller.getById,
);

cidadeRouter.put(
  '/:id',
  ensureAuthenticated,
  cidadesConrtoller.updateByIdValidation,
  cidadesConrtoller.updateById,
);

cidadeRouter.post(
  '/',
  ensureAuthenticated,
  cidadesConrtoller.createBodyValidation,
  cidadesConrtoller.create,
);

cidadeRouter.delete(
  '/:id',
  ensureAuthenticated,
  cidadesConrtoller.deleteByIdValidation,
  cidadesConrtoller.deleteById,
);

export default cidadeRouter;
