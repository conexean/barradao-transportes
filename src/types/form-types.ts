import { ZodIssue } from 'zod';

export type SubmitFormAction = (
  _prevState: any,
  params: FormData,
) => Promise<{ success: boolean; errors: ZodIssue[] }>;

export type FormProps = {
  action: SubmitFormAction;
};
