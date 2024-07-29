import { z } from 'zod';

type ErrorMessages = {
  invalidUsername: string;
  usernameRequired: string;
  passwordRequired: string;
};

const errorMessages: ErrorMessages = {
  invalidUsername: 'Formato de usuário inválido',
  usernameRequired: 'Informe o usuário',
  passwordRequired: 'Informe a senha',
};

const authenticateSchema = z
  .object({
    username: z.string().min(1, { message: errorMessages.usernameRequired }),
    password: z.string().min(1, { message: errorMessages.passwordRequired }),
  })
  .superRefine((values, ctx) => {
    if (
      values.username.length >= 1 &&
      !/^[a-z0-9]{3,10}$/.test(values.username)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessages.invalidUsername,
        path: ['username'],
      });
    }
  });

export default authenticateSchema;
