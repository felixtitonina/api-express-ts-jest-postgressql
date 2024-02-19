import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';

describe('pessoas - Create', () => {
  it('Cria registro', async () => {
    const res1 = await testServer.post('/pessoas').send({
      email: 'felixcreate@gmail.com',
      cidadeId: 1,
      nomeCompleto: 'felix tito nina',
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Tenta criar um registro com nome muito curto', async () => {
    const res1 = await testServer.post('/pessoas').send({
      email: 'felixcreategmail.com',
      cidadeId: 1,
      nomeCompleto: 'felix tito nina',
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.email');
  });
});
