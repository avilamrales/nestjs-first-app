import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getUsers() {
    return this.userModel.find().exec();
  }

  createUser(user: CreateUserDTO) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
