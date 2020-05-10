import supertest from 'supertest';

import app from '../src/koa';

describe('Server', () => {
  const server = app.listen(3000);
  const request = supertest(server);

  afterAll(() => {
    server.close();
  });

  it('should return welcome message', async () => {
    request.get('/').expect(200);
  });
});
