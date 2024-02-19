import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { cidadesProvider } from '../../database/providers/cidades';

interface IParamProps {
  id: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    }),
  ),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  const result = await cidadesProvider.deleteById(Number(req.params.id));
  console.log('🚀 ~ deleteById ~ result:', result);
  if (result instanceof Error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ errors: { default: result.message } });
  }
  return res.status(StatusCodes.NO_CONTENT).json(result);
};
