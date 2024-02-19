import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';

describe('pessoas - GetAll', () => {
  it('Buscar todos os registros', async () => {
    const res1 = await testServer.post('/pessoas').send({
      email: 'felixgetall@gmail.com',
      cidadeId: 1,
      nomeCompleto: 'felix tito nina',
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get('/pessoas').send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});
