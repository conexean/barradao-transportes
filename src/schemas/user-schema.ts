import { z } from 'zod';

type ErrorMessages = {
  required: (field: string) => string;
  minLength: (field: string, length: number) => string;
  maxLength: (field: string, length: number) => string;
  invalidEmail: string;
  passwordsMinLength: string;
  passwordsNotMatch: string;
  invalidType: (field: string) => string;
  invalidUsername: string;
};

const errorMessages: ErrorMessages = {
  required: (field) => `O ${field} é obrigatório`,
  minLength: (field, length) =>
    `${field} deve ter pelo menos ${length} caracteres`,
  maxLength: (field, length) =>
    `${field} deve ter no máximo ${length} caracteres`,
  invalidEmail: 'E-mail inválido',
  passwordsMinLength: 'Senha deve ter no mínimo 8 caracteres',
  passwordsNotMatch: 'As senhas não correspondem',
  invalidType: (field) => `${field} deve ser uma string`,
  invalidUsername: 'Nome de usuário inválido',
};

const userSchema = z
  .object({
    name: z
      .string({
        message: errorMessages.invalidType('Nome'),
      })
      .min(3, { message: errorMessages.minLength('Nome', 3) })
      .max(10, { message: errorMessages.maxLength('Nome', 10) }),
    lastname: z
      .string({
        message: errorMessages.invalidType('Sobrenome'),
      })
      .min(3, { message: errorMessages.minLength('Sobrenome', 3) })
      .max(10, { message: errorMessages.maxLength('Sobrenome', 10) }),
    email: z
      .string({
        message: errorMessages.invalidType('E-mail'),
      })
      .email({ message: errorMessages.invalidEmail })
      .max(50, { message: errorMessages.maxLength('E-mail', 50) }),
    username: z
      .string({
        message: errorMessages.invalidUsername,
      })
      .regex(/^[a-z0-9]{3,10}$/, {
        message: errorMessages.invalidUsername,
      }),
    password: z
      .string({
        message: errorMessages.invalidType('Senha'),
      })
      .min(8, { message: errorMessages.passwordsMinLength }),
    confirmpassword: z
      .string({
        message: errorMessages.invalidType('Confirmação de senha'),
      })
      .min(8, { message: errorMessages.passwordsMinLength }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: errorMessages.passwordsNotMatch,
    path: ['password', 'confirmpassword'],
  });

export default userSchema;
