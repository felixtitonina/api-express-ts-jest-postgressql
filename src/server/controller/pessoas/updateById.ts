import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { IPessoa } from '../../database/models';
import { pessoasProvider } from '../../database/providers/pessoas';

interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<IPessoa, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      email: yup.string().required().min(7).max(150),
      cidadeId: yup.number().integer().required().moreThan(0),
      nomeCompleto: yup.string().required().min(10).max(150),
    }),
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    }),
  ),
}));

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response,
) => {
  const result = await pessoasProvider.updateById(
    Number(req.params.id),
    req.body,
  );
  if (result instanceof Error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ errors: { default: result.message } });
  }
  return res.status(StatusCodes.NO_CONTENT).json(result);
};
