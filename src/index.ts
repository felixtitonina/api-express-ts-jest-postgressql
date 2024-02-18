import { server } from './server/server';
import dotenv from 'dotenv';
dotenv.config();

const port = Number(process.env.PORT) || 3001;
console.log('🚀 ~ port:', port);

server.listen(port, () => console.log(`listening on port ${port}`));
