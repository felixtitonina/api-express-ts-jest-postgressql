import { Knex } from './server/database/knex';
import { server } from './server/server';
import dotenv from 'dotenv';
dotenv.config();
const startServer = () => {
  const port = Number(process.env.PORT) || 3001;
  console.log('🚀 ~ port:', port);

  server.listen(port, () => console.log(`listening on port ${port}`));
};

if (
  // process.env.NODE_ENV == 'development' ||
  process.env.NODE_ENV == 'homolog' ||
  process.env.NODE_ENV == 'production'
) {
  Knex.migrate
    .latest()
    .then(() => {
      console.log('🚀 ~ Knex migrate inicializado');
      Knex.seed
        .run()
        .then(() => {
          console.log('🚀 ~ Knex seed inicializado');
          startServer();
        })
        .catch(console.log);
    })
    .catch(console.log);
} else {
  startServer();
}
