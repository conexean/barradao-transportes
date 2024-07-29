import { z } from 'zod';

type ErrorMessages = {
  invalidDescription: string;
  requiredDescription: string;
};

const errorMessages: ErrorMessages = {
  invalidDescription: 'Formato de descrição inválido',
  requiredDescription: 'Informe a descrição',
};

const measureSchema = z
  .object({
    description: z
      .string()
      .min(1, { message: errorMessages.requiredDescription }),
  })
  .superRefine((values, ctx) => {
    if (
      values.description.length >= 1 &&
      !/^[a-z0-9]{3,10}$/.test(values.description)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessages.invalidDescription,
        path: ['description'],
      });
    }
  });

export default measureSchema;
