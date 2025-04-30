import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
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
}
