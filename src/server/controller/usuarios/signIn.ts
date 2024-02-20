import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { IUsuario } from '../../database/models';
import { usuariosProvider } from '../../database/providers/usuarios';
import { JWTService, PassswordCryto } from '../../shared/services';

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

  if (!passwordMatch) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ errors: { default: 'Email ou senha inválidos.' } });
  } else {
    const accessToken = JWTService.sign({ uid: result.id });
    if (accessToken === 'JWT_SECRET_NOT_FOUND') {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ errors: { default: 'Erro ao gerar o token de acesso.' } });
    }
    if (accessToken === 'INVALID_TOKEN') {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errors: { default: 'Token inválido ou expirado.' } });
    }
    return res.status(StatusCodes.OK).json({ accessToken });
  }
};
