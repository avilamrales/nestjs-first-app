import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDTO[] = [];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDTO) {
    this.users.push({ ...user, id: this.users.length + 1 });

    return user;
  }
}
