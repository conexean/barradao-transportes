import { inject, injectable } from 'inversify';
import { TYPES } from '@ioc/types';
import * as userRepository from '@domain/repositories/user-repository';
import { AppError } from '@core/erros/app-error';
import { MESSAGES } from '@utils/messages';
import { UpdateUserDTO } from '../../dtos/user/update-user-dto';
import { UserDTO } from '../../dtos/user/user-dto';
import { User } from '@domain/entities/user-entitie';

@injectable()
export class UpdateUser {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: userRepository.UserRepository,
  ) {}

  async execute(updateUserDTO: UpdateUserDTO): Promise<UserDTO> {
    try {
      const existingUser = await this.userRepository.findActiveById(
        updateUserDTO.id,
      );
      if (!existingUser) throw new AppError(MESSAGES.USER.USER_NOT_FOUND, 404);

      const updatedUser = new User(
        existingUser.id,
        updateUserDTO.name,
        updateUserDTO.lastname,
        updateUserDTO.email,
        existingUser.password,
        existingUser.active,
        existingUser.createdAt,
        new Date(),
      );

      // O método update do repositório deve retornar UserDTO
      return this.userRepository.update(updatedUser);
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError(MESSAGES.COMMON.UNKNOWN_ERROR, 500);
    }
  }
}
