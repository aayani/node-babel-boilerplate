import express from 'express';
import { OK } from 'http-status-codes';

import { authorize, authenticate } from './middleware/auth';

export const AuthRouter = express.Router();

AuthRouter.post('/login', authorize);

AuthRouter.get('/me', authenticate, (req, res) => {
  res.status(OK).json(req.user);
});
