import { inject, injectable } from 'inversify';
import { TYPES } from '@ioc/types';
import * as userRepository from '@domain/repositories/user-repository';
import { AppError } from '@core/erros/app-error';
import { MESSAGES } from '@utils/messages';
import { UserDTO } from '../../dtos/user/user-dto';

@injectable()
export class GetUserById {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: userRepository.UserRepository,
  ) {}

  async execute(id: number): Promise<UserDTO> {
    try {
      const user = await this.userRepository.findActiveById(id);
      if (!user) {
        throw new AppError(MESSAGES.USER.FIND_BY_ID_FAIL, 404);
      }
      return user;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError(MESSAGES.COMMON.UNKNOWN_ERROR, 500);
    }
  }
}
