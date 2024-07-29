import { z } from 'zod';

type ErrorMessages = {
  invalidCategory: string;
  requiredCategory: string;
};

const errorMessages: ErrorMessages = {
  invalidCategory: 'Formato de category inválido',
  requiredCategory: 'Informe a category',
};

const vehicleCategorySchema = z
  .object({
    description: z.string().min(1, { message: errorMessages.requiredCategory }),
  })
  .superRefine((values, ctx) => {
    if (
      values.description.length >= 1 &&
      !/^[a-z0-9]{3,10}$/.test(values.description)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessages.invalidCategory,
        path: ['description'],
      });
    }
  });

export default vehicleCategorySchema;
