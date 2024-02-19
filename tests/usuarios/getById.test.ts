import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';

describe('pessoas - GetById', () => {
  it('Busca registro por id', async () => {
    const res1 = await testServer.post('/pessoas').send({
      email: 'felixgetbyid@gmail.com',
      cidadeId: 1,
      nomeCompleto: 'felix tito nina',
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get(`/pessoas/${res1.body}`).send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('email');
  });
  it('Tenta buscar registro que não existe', async () => {
    const res1 = await testServer.get('/pessoas/99999').send();

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.default');
  });
});
