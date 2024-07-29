import { UserInterface } from '@/interfaces/models-interface/user-interface';
import User from '@/models/user';
import UserRepository from '@/repositories/user-repository';
import { ValidationError } from '@/utils/validtion-error';
import bcrypt from 'bcrypt';

export default class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers(page: number = 1, pageSize: number = 10): Promise<User[]> {
    try {
      const validPage = page < 1 ? 1 : page;
      const users = await this.userRepository.getAllUsers(validPage, pageSize);
      return users;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async userCount(): Promise<number> {
    try {
      const count = await this.userRepository.usersCount();
      return count;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getActiveUserByUsername(username: string): Promise<User | null> {
    try {
      const user: User | null =
        await this.userRepository.getUserByUsername(username);

      if (!user) {
        return null;
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async createUser(userDTO: UserInterface): Promise<User | undefined> {
    try {
      const existEmail = await this.userRepository.getUserByEmail(
        userDTO.email,
      );

      if (existEmail) {
        throw new ValidationError('E-mail já está em uso', 'email');
      }

      const existUsername = await this.userRepository.getUserByUsername(
        userDTO.username,
      );

      if (existUsername) {
        throw new ValidationError('Usuário já está em uso', 'username');
      }

      const hashedPassword = await bcrypt.hash(userDTO.password, 11);

      const userToSave: UserInterface = {
        ...userDTO,
        password: hashedPassword,
      };

      const user = await this.userRepository.createUser(userToSave);
      return user;
    } catch (error: any) {
      if (error instanceof ValidationError) {
        throw new ValidationError(error.message, error.field);
      }

      throw new Error('Erro ao salvar o usuário');
    }
  }
}
