import userSchema from '@/schemas/user-schema';
import { z } from 'zod';

type userType = z.infer<typeof userSchema>;

export default userType;
