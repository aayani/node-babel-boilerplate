import persistence from '../utils/persistence';

export class UserService {
  constructor() {
    this.repository = persistence();
  }

  async create(obj) {
    return this.repository.create(obj);
  }

  async findById(id) {
    const users = await this.repository.findAll();

    return users.find((user) => user.id === id) || null;
  }

  async findAll(page = 1) {
    const users = await this.repository.findAll();

    if (page > 0) {
      return users.slice((page - 1) * 10, 10);
    }

    return [];
  }
}
