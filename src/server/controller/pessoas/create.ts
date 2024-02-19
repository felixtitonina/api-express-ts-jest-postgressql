import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { IPessoa } from '../../database/models';
import { pessoasProvider } from '../../database/providers/pessoas';

interface IBodyProps extends Omit<IPessoa, 'id'> {}

export const createBodyValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      email: yup.string().required().min(7).max(150).email(),
      cidadeId: yup.number().integer().required().moreThan(0),
      nomeCompleto: yup.string().required().min(5).max(150),
    }),
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response,
) => {
  const result = await pessoasProvider.create(req.body);
  if (result instanceof Error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ errors: { default: result.message } });
  }
  return res.status(StatusCodes.CREATED).json(result);
};
