import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const ensureAuthenticated: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(
    '🚀 ~ constensureAuthenticated:RequestHandler= ~ authorization:',
    authorization,
  );
  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Não autenticado' },
    });
  }

  const [type, token] = authorization.split(' ');
  if (type !== 'Bearer' || !token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Não autenticado' },
    });
  }
  if (token !== 'teste') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Não autenticado' },
    });
  }
  return next();
};
