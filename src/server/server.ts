import express from 'express';
import cors from 'cors';
import './shared/services/translationsYuo';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import dotenv from 'dotenv';
import { optionsDocs } from './docs/swaggerConfig';
dotenv.config();

const server = express();

server.use(
  cors({
    origin: process.env.ENABLED_CORS?.split(';') || [],
  }),
);

server.use(express.json());
server.use(router);

const specs = swaggerJsdoc(optionsDocs);
server.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export { server };
