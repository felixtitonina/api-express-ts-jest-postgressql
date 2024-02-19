import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models';
import { cidadesProvider } from '../../database/providers/cidades';

interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    }),
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().optional().moreThan(0),
    }),
  ),
}));

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response,
) => {
  const result = await cidadesProvider.updateById(
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
