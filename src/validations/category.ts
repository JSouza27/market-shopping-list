import { z } from 'zod';

const colorEnum = z.enum(['pink', 'orange', 'yellow', 'green', 'blue']);

export const categorySchema = z.object({
  id: z.string(),
  icon: z.any(),
  label: z.string(),
  value: z.string(),
  color: colorEnum
});
