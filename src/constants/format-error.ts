import { ZodIssue, ZodIssueCode } from 'zod';

const formatError = (
  message: string,
  path: (string | number)[] = [],
): ZodIssue => ({
  code: ZodIssueCode.custom,
  message,
  path,
});

export default formatError;
