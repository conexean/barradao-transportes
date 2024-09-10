// updateUser.server.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { updateUserSchema } from '@application/validations/user/update-user-validation';
import { UpdateUserDTO } from '@/core/domain/dtos/user/update-user-dto';
import { userModule } from '@ioc/modules/user-module';
import { MESSAGES } from '@utils/messages';
import { AppError } from '@/core/erros/app-error';

type ActionState = {
  message: string;
  success: boolean;
  errors?: { field: string; message: string }[];
};

type RawFormData = Record<string, string | File>;

export async function updateUser(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawFormData: RawFormData = Object.fromEntries(formData.entries());

  try {
    const validatedData = updateUserSchema.parse(rawFormData);

    const updateUserDto: UpdateUserDTO = {
      id: validatedData.id,
      name: validatedData.name,
      lastname: validatedData.lastname,
      email: validatedData.email,
    };

    await userModule.updateUserUseCase.execute(updateUserDto);

    revalidatePath('/usuarios');

    return { message: MESSAGES.USER.UPDATED_SUCCESS, success: true };
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      return {
        message: MESSAGES.COMMON.VALIDATION_ERROR,
        errors,
        success: false,
      };
    }
    if (error instanceof AppError) {
      return { message: error.message, success: false };
    }
    return { message: MESSAGES.COMMON.UNKNOWN_ERROR, success: false };
  }
}
