import express from 'express';

import './shared/services/translationsYuo';
import { router } from './routes';
import dotenv from 'dotenv';
dotenv.config();

const server = express();

server.use(express.json());
server.use(router);

export { server };
