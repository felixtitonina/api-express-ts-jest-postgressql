import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { pessoasProvider } from '../../database/providers/pessoas';

interface IParamProps {
  id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    }),
  ),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
  const result = await pessoasProvider.getById(Number(req.params.id));
  if (result instanceof Error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ errors: { default: result.message } });
  }
  return res.status(StatusCodes.OK).json(result);
};
