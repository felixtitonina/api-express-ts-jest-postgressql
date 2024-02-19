import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { IUsuario } from '../../database/models';
import { usuariosProvider } from '../../database/providers/usuarios';

interface IBodyProps extends Omit<IUsuario, 'id'> {}

export const signUpBodyValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3).max(150),
      email: yup.string().required().email().min(5).max(150),
      senha: yup.string().required().min(6).max(150),
    }),
  ),
}));

export const signUp = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response,
) => {
  const result = await usuariosProvider.create(req.body);
  if (result instanceof Error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ errors: { default: result.message } });
  }
  return res.status(StatusCodes.CREATED).json(result);
};
