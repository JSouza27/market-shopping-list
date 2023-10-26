import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().nonempty('Campo obrigatório'),
  quantity: z
    .string()
    .nonempty('Campo obrigatório')
    .min(0, 'Esse campo não pode ser menor que zero')
});
