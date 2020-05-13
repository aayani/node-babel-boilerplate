import {
  OK,
  UNAUTHORIZED,
  UNPROCESSABLE_ENTITY,
  INTERNAL_SERVER_ERROR,
} from 'http-status-codes';
import jwt from 'jsonwebtoken';

import config from '../../config';
import logger from '../../utils/logger';

export const authorize = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username && password) {
      const token = jwt.sign({ username }, config.secret);

      res.status(OK).json({ token });
    } else {
      res
        .status(UNPROCESSABLE_ENTITY)
        .type('txt')
        .send('username, password is required');
    }
  } catch (err) {
    logger.error(err.message, `Auth ${req.method} ${req.path}`);
    res
      .status((err.response && err.response.status) || INTERNAL_SERVER_ERROR)
      .type('txt')
      .send(err.message);
  }
};

export const authenticate = async (req, res, next) => {
  try {
    const { authorization: Authorization } = req.headers;

    if (!Authorization) {
      throw new Error('No or invalid authorization');
    }

    const { username } = jwt.verify(
      Authorization.replace('Bearer ', ''),
      config.secret,
    );

    req.user = { username };
    next();
  } catch (err) {
    logger.error(err.message, `Auth ${req.method} ${req.path}`);
    res.status(UNAUTHORIZED).type('txt').send(err.message);
  }
};
