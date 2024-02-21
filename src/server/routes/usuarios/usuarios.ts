import * as express from 'express';
import { usuariosConrtoller } from '../../controller/usuarios';

const cidadeRouter = express.Router();

cidadeRouter.post(
  '/entrar',
  usuariosConrtoller.signInBodyValidation,
  usuariosConrtoller.signIn,
);

cidadeRouter.post(
  '/cadastrar',
  usuariosConrtoller.signUpBodyValidation,
  usuariosConrtoller.signUp,
);

export default cidadeRouter;
