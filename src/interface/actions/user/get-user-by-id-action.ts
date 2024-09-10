'use server';

import { userModule } from '@ioc/modules/user-module';
import { MESSAGES } from '@utils/messages';
import { AppError } from '@/core/erros/app-error';

type ActionState = {
  message: string;
  success: boolean;
  user: { id: number; name: string; lastname: string; email: string } | null;
  errors?: { field: string; message: string }[];
};

export async function getUserById(
  prevState: ActionState = { message: '', success: false, user: null },
  id: number,
): Promise<ActionState> {
  try {
    const user = await userModule.getUserByIdUseCase.execute(id);

    return {
      message: MESSAGES.USER.FINDED_SUCCESS,
      success: true,
      user: {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
      },
    };
  } catch (error: unknown) {
    if (error instanceof AppError) {
      return { message: error.message, success: false, user: null };
    }
    return {
      message: MESSAGES.COMMON.UNKNOWN_ERROR,
      success: false,
      user: null,
    };
  }
}
