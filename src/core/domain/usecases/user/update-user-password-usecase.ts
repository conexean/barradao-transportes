import { TYPES } from '@ioc/types';
import { inject, injectable } from 'inversify';
import { UpdatePasswordDTO } from '../../dtos/user/update-password-dto';
import { MESSAGES } from '@utils/messages';
import { AppError } from '@core/erros/app-error';
import * as userRepository from '@domain/repositories/user-repository';

@injectable()
export class UpdateUserPassword {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: userRepository.UserRepository,
  ) {}

  async execute(updatePasswordDTO: UpdatePasswordDTO): Promise<void> {
    try {
      const user = await this.userRepository.findActiveById(
        updatePasswordDTO.userId,
      );
      if (!user) {
        throw new AppError(MESSAGES.USER.USER_NOT_FOUND, 404);
      }

      // Aqui você deve adicionar a lógica para verificar se a senha atual está correta
      // Por exemplo:
      // if (!bcrypt.compareSync(updatePasswordDTO.currentPassword, user.password)) {
      //   throw new AppError(MESSAGES.USER.INCORRECT_PASSWORD, 400);
      // }

      // Aqui você deve adicionar a lógica para criptografar a nova senha
      // const hashedNewPassword = bcrypt.hashSync(updatePasswordDTO.newPassword, 10);

      await this.userRepository.updatePassword(
        user.id,
        updatePasswordDTO.newPassword,
      );
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError(MESSAGES.COMMON.UNKNOWN_ERROR, 500);
    }
  }
}
