import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'doña pelos',
      phone: '7411204634',
    },
    {
      id: 2,
      name: 'bojito bojinez',
      phone: '6565604634',
    },
  ];
  getUsers() {
    return this.users;
  }

  createUsers(user: CreateUserDto) {
    this.users.push(user)
    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
