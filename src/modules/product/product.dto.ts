import { z } from 'zod';

export const ProductDto = z.object({
  name: z.string({ required_error: 'Name is required' }),
  description: z.string({ required_error: 'Description is required' }),
  price: z.number({ required_error: 'Price is required' }),
  stock: z.number({ required_error: 'Stock is required' }),
});

export type ProductCreateInput = z.infer<typeof ProductDto>;
