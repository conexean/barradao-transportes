import { z } from 'zod';
import { baseUserSchema, baseUserSchemaFields } from './shared-user-validation';
import { MESSAGES } from '@/utils/messages';

export const updateUserSchema = baseUserSchema.extend({
  id: z.number().positive(MESSAGES.COMMON.INVALID_ID),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;

export const updateUserSchemaFields = [
  ...baseUserSchemaFields,
  {
    key: 'id' as const,
    label: '',
    type: 'hidden',
    placeholder: '',
    className: '',
  },
];
