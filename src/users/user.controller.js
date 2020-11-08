import Joi from '@hapi/joi';

import { User } from './user.schema';
import { getRandomNumber } from '../utils';
import { UserService } from './user.service';
import { Get, Post, Controller } from '../decorators';

@Controller('users')
export class UserController {
  constructor() {
    this.schema = Joi.object(User);
    this.service = new UserService();
  }

  @Get()
  async getAllUsers(page = 1) {
    return this.service.findAll(page);
  }

  @Get(':id')
  async getUserById(id) {
    return this.service.findById(id);
  }

  @Post()
  async createUser(obj) {
    const result = this.schema.validate(obj);

    if (result.error) {
      throw new Error(result.error.message);
    }

    return this.service.create({ id: getRandomNumber(1, 10000), ...obj });
  }
}
