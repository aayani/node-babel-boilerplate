import { authorize, authenticate } from './auth';

describe('Auth Middleware', () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE1ODkzNTU3NTEsImV4cCI6MTYyMDkxMzM1MX0.eP9SZFol5ySCipqZZh9OIYLYXhR9Y2BL12XbNJhICnQ';
  const mockResponse = () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.type = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.user = null;

    return res;
  };

  it('should 422 if either username or password is missing', async () => {
    const res = mockResponse();

    await authorize({ body: { username: 'test@example.com' } }, res);

    expect(res.status).toHaveBeenCalledWith(422);

    await authorize({ body: { password: 'qwerty123' } }, res);

    expect(res.status).toHaveBeenCalledWith(422);
  });

  it('should return auth token', async () => {
    const req = {
      body: { username: 'test@example.com', password: 'qwerty123' },
    };
    const res = mockResponse();
    await authorize(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should 401 when there is no auth token', async () => {
    const req = { headers: { authorization: '' } };
    const res = mockResponse();
    await authenticate(req, res);

    expect(res.status).toBeCalledWith(401);
  });

  it('should authenticate user based on access token', async () => {
    const req = { headers: { authorization: `Bearer ${token}` } };
    const res = mockResponse();
    const next = jest.fn();
    await authenticate(req, res, next);

    expect(req.user).toStrictEqual({ username: 'test@example.com' });
    expect(next).toHaveBeenCalled();
  });
});
