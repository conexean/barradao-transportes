import FieldErrors from '@/interfaces/field-erros-interface';
import { ZodIssue } from 'zod';

const findErrors = (fieldName: string, errors: ZodIssue[]): FieldErrors => {
  const filteredErrors = errors.filter((item) => item.path.includes(fieldName));
  const errorMessages = filteredErrors.map((item) => item.message);
  const hasErrors = filteredErrors.length > 0;

  return { errors: errorMessages, hasErrors };
};

export default findErrors;
