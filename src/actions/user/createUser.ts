'use server';

import formatError from '@/constants/format-error';
import { UserInterface } from '@/application/interfaces/models-interface/user-interface';
import userSchema from '@/schemas/user-schema';
import UserService from '@/services/user-service';
import { SubmitFormAction } from '@/types/form-types';
import { ValidationError } from '@/utils/validtion-error';

const createUser: SubmitFormAction = async (_prevState, params) => {
  const validation = userSchema.safeParse(Object.fromEntries(params));

  if (validation.success) {
    try {
      const userService = new UserService();

      const userData = validation.data;

      const userDTO: UserInterface = {
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        username: userData.username,
        password: userData.password,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await userService.createUser(userDTO);

      return { success: true, errors: [] };
    } catch (error) {
      if (error instanceof ValidationError) {
        return {
          success: false,
          errors: [formatError(error.message, [error.field])],
        };
      }
      return {
        success: false,
        errors: [formatError('Erro desconhecido ao cadastar usuário')],
      };
    }
  } else {
    return {
      success: false,
      errors: validation.error.issues,
    };
  }
};

export default createUser;
