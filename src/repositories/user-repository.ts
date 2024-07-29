import { UserInterface } from '@/interfaces/models-interface/user-interface';
import prisma from '@/lib/prisma';
import User from '@/models/user';

export default class UserRepository {
  async getAllUsers(validPage: number, pageSize: number): Promise<User[]> {
    try {
      const users = await prisma.user.findMany({
        skip: (validPage - 1) * pageSize,
        take: pageSize,
        orderBy: {
          id: 'desc',
        },
      });

      return users.map((user) => new User(user));
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async usersCount(): Promise<number> {
    try {
      const count = await prisma.user.count();
      return count;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getActiveUserByUsername(username: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { username: username, active: true },
      });

      return user ? new User(user) : null;
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }

  async getUserByUsername(username: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { username: username },
      });

      return user ? new User(user) : null;
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      return user ? new User(user) : null;
    } catch (error) {
      throw new Error('Erro ao buscar registro pelo e-mail');
    }
  }

  async getUserByID(id: number): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: id },
      });

      return user ? new User(user) : null;
    } catch (error) {
      throw new Error('Erro ao buscar registro pelo ID');
    }
  }

  async createUser(userDTO: UserInterface): Promise<User | undefined> {
    try {
      const createdUser = await prisma.user.create({
        data: userDTO,
      });
      return new User(createdUser);
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }
}
