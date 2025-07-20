import * as z from 'zod/mini';

import { ETaskPriority } from '@shared/types/tasks';

export const taskCreateSchema = z.object({
  title: z
    .string()
    .check(z.minLength(1, 'Title is required'), z.maxLength(50, 'Title must be at most 100 characters long')),
  description: z
    .string()
    .check(
      z.minLength(1, 'Description is required'),
      z.maxLength(500, 'Description must be at most 500 characters long')
    ),
  createdAt: z.string().check(z.refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date format' })),
  priority: z.enum(ETaskPriority)
});

export type TTaskCreateForm = z.infer<typeof taskCreateSchema>;

export const defaultValues: TTaskCreateForm = {
  title: '',
  description: '',
  createdAt: new Date().toISOString().split('T')[0],
  priority: ETaskPriority.Low
};
