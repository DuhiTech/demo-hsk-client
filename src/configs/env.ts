import { z } from 'zod';

const envSchema = z.object({
  CLERK_PUBLISHABLE_KEY: z.string(),
});

const _env = {
  CLERK_PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
};

const result = envSchema.safeParse(_env);

if (!result.success) {
  console.error('❌ Invalid environment variables:', result.error.flatten().fieldErrors);
  throw new Error('⚠️ Invalid environment variables.');
}

export const env = result.data;
