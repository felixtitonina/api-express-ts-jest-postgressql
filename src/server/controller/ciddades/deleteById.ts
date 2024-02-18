import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    }),
  ),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  try {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send('not implemented');
  } catch (error) {
    console.log('🚀 ~ deleteById ~ error:', error);
  }
};
