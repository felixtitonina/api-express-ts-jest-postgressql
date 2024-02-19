import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';

describe('pessoas - UpdateById', () => {
  it('Atualiza registro', async () => {
    const res1 = await testServer.post('/pessoas').send({
      email: 'felixupdatebyid@gmail.com',
      cidadeId: 1,
      nomeCompleto: 'felix tito nina',
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer.put(`/pessoas/${res1.body}`).send({
      email: 'felixupdatebyid1@gmail.com',
      cidadeId: 1,
      nomeCompleto: 'felix tito nina',
    });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Tenta atualizar registro que não existe', async () => {
    const res1 = await testServer.put('/pessoas/99999').send({
      email: 'felixupdatebyid2@gmail.com',
      cidadeId: 1,
      nomeCompleto: 'felix tito nina',
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.default');
  });
});
