import express from 'express';
import cors from 'cors';
import './shared/services/translationsYuo';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import dotenv from 'dotenv';

import { optionsDocs } from './docs/swaggerConfig';

import cidadeRouter from './routes/cidades/cidades';
import pessoaRouter from './routes/pessoas/pessoas';
import usuarioRouter from './routes/usuarios/usuarios';
dotenv.config();

const server = express();

server.use(
  cors({
    origin: process.env.ENABLED_CORS?.split(';') || [],
  }),
);

server.use(express.json());

server.get('/health', (_, res) => {
  return res.status(200).send({
    message: 'Success',
  });
});
server.use('/cidades', cidadeRouter);
server.use('/pessoas', pessoaRouter);
server.use('/usuarios', usuarioRouter);

const specs = swaggerJsdoc(optionsDocs);
server.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export { server };
