'use server';

import authenticateSchema from '@/schemas/authenticate';
import { SubmitFormAction } from '@/types/form-types';
import formatError from '@/constants/format-error';
import { login } from '@/lib/auth';

const authenticate: SubmitFormAction = async (_prevState, params) => {
  const validation = authenticateSchema.safeParse(Object.fromEntries(params));

  if (validation.success) {
    try {
      const { username, password } = validation.data;

      await login(username, password);
      return {
        success: true,
        errors: [],
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          errors: [formatError(error.message, ['username', 'password'])],
        };
      }

      return {
        success: false,
        errors: [formatError('Erro desconhecido', [])],
      };
    }
  } else {
    return {
      success: false,
      errors: validation.error.issues,
    };
  }
};

export default authenticate;
