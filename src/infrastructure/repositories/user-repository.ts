import { inject, injectable } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { User } from '@domain/entities/user-entitie';
import { UserRepository } from '@domain/repositories/user-repository';
import { TYPES } from '@ioc/types';
import { AppError } from '@core/erros/app-error';
import { MESSAGES } from '@utils/messages';
import { UserDTO } from '@domain/dtos/user/user-dto';

@injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    @inject(TYPES.PrismaClient)
    private prisma: PrismaClient,
  ) {}

  private mapToUserDTO(user: User): UserDTO {
    return {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
    };
  }

  private mapToUser(userData: any): User {
    return new User(
      userData.id,
      userData.name,
      userData.lastname,
      userData.email,
      userData.password,
      userData.active,
      userData.createdAt,
      userData.updatedAt,
    );
  }

  async create(user: User): Promise<UserDTO> {
    try {
      const createdUser = await this.prisma.user.create({
        data: {
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          password: user.password,
          active: user.active,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
      return this.mapToUserDTO(this.mapToUser(createdUser));
    } catch (error) {
      throw new AppError(MESSAGES.USER.CREATED_FAIL, 500);
    }
  }

  async findActiveById(id: number): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new AppError(MESSAGES.USER.FIND_BY_ID_FAIL, 404);
      }
      return this.mapToUser(user);
    } catch (error) {
      throw new AppError(MESSAGES.USER.FIND_BY_ID_FAIL, 500);
    }
  }

  async update(user: User): Promise<UserDTO> {
    try {
      const updatedUser = await this.prisma.user.update({
        where: { id: user.id },
        data: {
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          password: user.password,
          updatedAt: user.updatedAt,
        },
      });
      return this.mapToUserDTO(this.mapToUser(updatedUser));
    } catch (error) {
      throw new AppError(MESSAGES.USER.UPDATED_FAIL, 500);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      throw new AppError(MESSAGES.USER.DELETED_FAIL, 500);
    }
  }

  async findAllActives(): Promise<UserDTO[]> {
    try {
      const users = await this.prisma.user.findMany();
      return users.map((user) => this.mapToUserDTO(this.mapToUser(user)));
    } catch (error) {
      throw new AppError(MESSAGES.USER.FIND_ALL_FAIL, 500);
    }
  }

  async usersCount(): Promise<number> {
    try {
      return await this.prisma.user.count();
    } catch (error) {
      throw new AppError(MESSAGES.USER.COUNT_FAIL, 500);
    }
  }

  async findActiveByEmail(email: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: email },
      });
      if (!user) {
        throw new AppError(MESSAGES.USER.FIND_BY_EMAIL_FAIL, 404);
      }
      return this.mapToUser(user);
    } catch (error) {
      throw new AppError(MESSAGES.USER.FIND_BY_EMAIL_FAIL, 500);
    }
  }

  async updatePassword(userId: number, newPassword: string): Promise<void> {
    try {
      await this.prisma.user.update({
        where: { id: userId },
        data: { password: newPassword },
      });
    } catch (error) {
      throw new AppError(MESSAGES.USER.UPDATE_PASSWORD_FAIL, 500);
    }
  }
}
