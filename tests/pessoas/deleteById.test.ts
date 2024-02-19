import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';

describe('pessoas - DeleteById', () => {
  it('Apaga registro', async () => {
    const res1 = await testServer.post('/pessoas').send({
      email: 'felixdeletebyid@gmail.com',
      cidadeId: 1,
      nomeCompleto: 'felix tito nina',
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer.delete(`/pessoas/${res1.body}`).send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Tenta apagar registro que não existe', async () => {
    const res1 = await testServer.delete('/pessoas/99999').send();

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.default');
  });
});
