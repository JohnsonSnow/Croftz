import { z } from 'zod';

export const spinSchema = z.object({
  userId: z.string().uuid(),
});

export type SpinInput = z.infer<typeof spinSchema>;