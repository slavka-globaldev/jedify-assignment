import * as z from 'zod/mini';

import { getRandomProfileInfo } from '@shared/mocks/profile';
import { EUserRole } from '@shared/types';

export const profileFormSchema = z.object({
  fullName: z
    .string()
    .check(z.minLength(1, 'First name is required'), z.maxLength(100, 'Full name must be at most 100 characters long')),
  email: z.string().check(z.minLength(1, 'Email is required'), z.email('Invalid email format')),
  roles: z.enum(EUserRole),
  enabledEmailNotifications: z.boolean()
});

export type TProfileFormData = z.infer<typeof profileFormSchema>;

export const defaultValues: TProfileFormData = getRandomProfileInfo();
