import { z } from 'zod';

export const schema = z.object({
  body: z.object({
    name: z.string().min(1).max(100),
  })// Make the params object optional
});

export type CreateUserInput = z.infer<typeof schema>;

