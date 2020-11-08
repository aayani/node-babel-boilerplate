import Joi from '@hapi/joi';

export const User = {
  id: Joi.number().optional(),

  firstName: Joi.string().required(),

  lastName: Joi.string().required(),

  email: Joi.string().email().required(),
};
