import { inject, injectable } from 'inversify';
import { TYPES } from '@ioc/types';
import * as userRepository from '@domain/repositories/user-repository';
import { AppError } from '@core/erros/app-error';
import { MESSAGES } from '@utils/messages';
import { CreateUserDTO } from '../../dtos/user/create-user-dto';
import { UserDTO } from '../../dtos/user/user-dto';
import { UserFactory } from '../../factories/user-factory';

@injectable()
export class CreateUser {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: userRepository.UserRepository,

    @inject(TYPES.UserFactory)
    private userFactory: UserFactory,
  ) {}

  async execute(createUserDTO: CreateUserDTO): Promise<UserDTO> {
    try {
      const newUser = this.userFactory.createNewUser(
        createUserDTO.name,
        createUserDTO.lastname,
        createUserDTO.email,
        createUserDTO.password,
      );

      return this.userRepository.create(newUser);
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError(MESSAGES.COMMON.UNKNOWN_ERROR, 500);
    }
  }
}
