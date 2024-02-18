import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';
describe('Cidades - create', () => {
  it('Criar registro', async () => {
    const respota1 = await testServer.post('/cidades').send({
      nome: 'ca',
    });

    expect(respota1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(respota1.body).toHaveProperty('errors.body.nome');
  });

  it('Criar registro com erros', async () => {
    const respota1 = await testServer.post('/cidades').send({
      nome: 'ca',
    });

    expect(respota1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(respota1.body).toHaveProperty('errors.body.nome');
  });
});
