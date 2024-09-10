import { injectable } from 'inversify';
import { User } from '@domain/entities/user-entitie';

@injectable()
export class UserFactory {
  createNewUser(
    name: string,
    lastname: string,
    email: string,
    password: string,
  ): User {
    return new User(
      0,
      name,
      lastname,
      email,
      password,
      true,
      new Date(),
      new Date(),
    );
  }
}
