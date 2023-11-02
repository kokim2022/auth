import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: 'ABCD',
    },
    {
      userId: '456',
      stripeUserId: 'EFGH',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    console.log('getUserRequest', getUserRequest);
    const stripeUser = this.users.find(
      (user) => user.userId == getUserRequest.userId,
    );
    console.log('stripeUser', stripeUser);
    return stripeUser;
  }
}
