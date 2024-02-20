import { Knex } from 'knex';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

export const development: Knex.Config = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'database.sqlite',
    ),
  },
  migrations: {
    directory: path.resolve(__dirname, '..', 'migrations'),
  },
  seeds: { directory: path.resolve(__dirname, '..', 'seeds') },
  pool: {
    afterCreate: (connection: any, done: Function) => {
      connection.run('PRAGMA foreign_keys = ON');
      done();
    },
  },
};

export const test: Knex.Config = {
  ...development,
  connection: ':memory:',
};

export const production: Knex.Config = {
  client: 'pg',
  migrations: {
    directory: path.resolve(__dirname, '..', 'migrations'),
  },
  seeds: { directory: path.resolve(__dirname, '..', 'seeds') },
  // connection: `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${Number(process.env.DATABASE_PORT || 5432)}/${process.env.DATABASE_NAME}?sslmode=disable`,
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT || 5432),
    ssl: false, // para o docker
    // ssl: {
    // rejectUnauthorized: false,
    // },
  },
};
