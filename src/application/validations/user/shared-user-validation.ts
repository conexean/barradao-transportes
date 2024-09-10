import { MESSAGES } from '@utils/messages';
import { z } from 'zod';

// Regex para uma senha mais forte
export const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const baseUserSchema = z.object({
  name: z
    .string()
    .min(3, MESSAGES.COMMON.MIN_3_CHARACTERS)
    .regex(/^[a-zA-Z\s]+$/, MESSAGES.COMMON.ONLY_LETTERS),
  lastname: z
    .string()
    .min(3, MESSAGES.COMMON.MIN_3_CHARACTERS)
    .regex(/^[a-zA-Z\s]+$/, MESSAGES.COMMON.ONLY_LETTERS),
  email: z.string().email(MESSAGES.COMMON.INVALID_EMAIL),
});

export const zodResolver =
  <T extends z.ZodType<any, any>>(schema: T) =>
  (values: z.infer<T>) => {
    try {
      schema.parse(values);
      return {};
    } catch (error: any) {
      return error.formErrors.fieldErrors;
    }
  };

export const baseUserSchemaFields = [
  {
    key: 'name' as const,
    label: 'Nome de Usuário',
    type: 'text',
    placeholder: 'Digite seu nome',
    className: '',
  },
  {
    key: 'lastname' as const,
    label: 'Sobrenome',
    type: 'text',
    placeholder: 'Digite seu sobrenome',
    className: '',
  },
  {
    key: 'email' as const,
    label: 'E-mail',
    type: 'email',
    placeholder: 'seu@email.com',
    className: '',
  },
] as const;
