import * as express from 'express';
import { pessoasConrtoller } from '../../controller/pessoas';
import { ensureAuthenticated } from '../../shared/middleware';

const cidadeRouter = express.Router();

cidadeRouter.get(
  '/',
  ensureAuthenticated,
  pessoasConrtoller.getAllQueryValidation,
  pessoasConrtoller.getAll,
);

cidadeRouter.get(
  '/:id',
  ensureAuthenticated,
  pessoasConrtoller.getByIdValidation,
  pessoasConrtoller.getById,
);

cidadeRouter.put(
  '/:id',
  ensureAuthenticated,
  pessoasConrtoller.updateByIdValidation,
  pessoasConrtoller.updateById,
);

cidadeRouter.post(
  '/',
  ensureAuthenticated,
  pessoasConrtoller.createBodyValidation,
  pessoasConrtoller.create,
);

cidadeRouter.delete(
  '/:id',
  ensureAuthenticated,
  pessoasConrtoller.deleteByIdValidation,
  pessoasConrtoller.deleteById,
);

export default cidadeRouter;
