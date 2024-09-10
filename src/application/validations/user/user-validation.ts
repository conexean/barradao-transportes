import { minLength, required } from '@/utils/validation-rules';
import {
  FieldValidation,
  maxLength,
  ValidationRule,
} from '@/utils/validation-types';

const arrayMinLength =
  (min: number, fieldName: string): ValidationRule<string | string[]> =>
  (value) => {
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed) && parsed.length < min) {
          return `${fieldName} deve ter pelo menos ${min} ${min === 1 ? 'item' : 'itens'}`;
        }
      } catch {
        return `${fieldName} deve ter pelo menos 1 item`;
      }
    } else if (Array.isArray(value) && value.length < min) {
      return `${fieldName} deve ter pelo menos ${min} ${min === 1 ? 'item' : 'itens'}`;
    }
    return true;
  };

export const userValidations: FieldValidation<{
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  permissions: string | string[];
}> = {
  name: [required('Nome'), minLength(3, 'Nome'), maxLength(10, 'Nome')],
  lastName: [maxLength(10, 'Sobrenome')],
  email: [required('E-mail'), maxLength(50, 'Email')],
  password: [required('Senha'), maxLength(15, 'Senha')],
  confirmPassword: [
    required('Confirmação de senha'),
    maxLength(200, 'Confirmação de senha'),
  ],
  permissions: [arrayMinLength(1, 'Permissões')],
};
