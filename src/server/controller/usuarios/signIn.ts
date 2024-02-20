import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { IUsuario } from '../../database/models';
import { usuariosProvider } from '../../database/providers/usuarios';
import { PassswordCryto } from '../../shared/services';

interface IBodyProps extends Omit<IUsuario, 'id' | 'nome'> {}

export const signInBodyValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      senha: yup.string().required().min(6).max(150),
      email: yup.string().required().email().min(5).max(150),
    }),
  ),
}));

export const signIn = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response,
) => {
  const { senha, email } = req.body;
  const result = await usuariosProvider.getByEmail(email);

  if (result instanceof Error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ errors: { default: 'Email ou senha inválidos.' } });
  }

  const passwordMatch = await PassswordCryto.verifyPassword(
    senha,
    result.senha,
  );
  console.log('🚀 ~ passwordMatch:', passwordMatch);

  if (!passwordMatch) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ errors: { default: 'Email ou senha inválidos.' } });
  } else {
    return res
      .status(StatusCodes.OK)
      .json({ accessToken: 'teste.teste.teste.teste' });
  }
};
