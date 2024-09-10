import { User } from '@domain/entities/user-entitie';
import { UserDTO } from '../dtos/user/user-dto';

export interface UserRepository {
  create(user: User): Promise<UserDTO>;
  delete(id: number): Promise<void>;
  update(user: User): Promise<UserDTO>;
  usersCount(): Promise<number>;
  findActiveById(id: number): Promise<User>;
  findActiveByEmail(email: string): Promise<User>;
  findAllActives(): Promise<UserDTO[]>;
  updatePassword(userId: number, newPassword: string): Promise<void>;
}
