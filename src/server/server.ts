import express from 'express';
import cors from 'cors';
import './shared/services/translationsYuo';
import { router } from './routes';
import dotenv from 'dotenv';
dotenv.config();

const server = express();

server.use(
  cors({
    origin: process.env.ENABLED_CORS?.split(';') || [],
  }),
);

server.use(express.json());
server.use(router);

export { server };
