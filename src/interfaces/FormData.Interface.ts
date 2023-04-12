import { z } from 'zod';

export const FormDataSchema = z.object({
	email: z.string().email(),
	age: z.preprocess((val) => parseInt(z.string().parse(val), 10), z.number().min(18).max(80)),
	date: z.preprocess((val) => new Date(val as string), z.date()),
	firstName: z.string(),
	lastName: z.string(),
	middleName: z.string(),
}).partial({
	middleName: true,
});

export type FormData = z.infer<typeof FormDataSchema>;