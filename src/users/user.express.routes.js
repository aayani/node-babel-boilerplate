import express from 'express';
import {
  OK,
  CREATED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} from 'http-status-codes';

import logger from '../utils/logger';
import { UserController } from './user.controller';

const userController = new UserController();

export const UserRouter = express.Router();

UserRouter.post('', async (req, res) => {
  try {
    const user = await userController.createUser(req.body);
    res.status(CREATED).send(user);
  } catch (err) {
    logger.error(err.message, `${req.method} ${req.originalUrl}`);
    res.status(INTERNAL_SERVER_ERROR).send();
  }
});

UserRouter.get('', async (req, res) => {
  const { page } = req.query;

  const users = await userController.getAllUsers(page);

  res.status(OK).send(users);
});

UserRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await userController.getUserById(id);

  if (user) {
    res.status(OK).send(user);
  } else {
    res.status(NOT_FOUND).send();
  }
});
