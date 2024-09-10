import { inject, injectable } from 'inversify';
import { TYPES } from '@ioc/types';
import * as userRepository from '@domain/repositories/user-repository';
import { AppError } from '@core/erros/app-error';
import { MESSAGES } from '@utils/messages';

@injectable()
export class DeleteUser {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: userRepository.UserRepository,
  ) {}

  async execute(id: number): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError(MESSAGES.COMMON.UNKNOWN_ERROR, 500);
    }
  }
}
