import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1).max(100),
});

export const userIdSchema = z.object({
  id: z.string().uuid(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UserIdInput = z.infer<typeof userIdSchema>;