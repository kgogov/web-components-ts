import { z } from 'zod';

const DEFAULT_ERROR_MSG: string = 'This field is required!';

export const FormDataSchema = z.object({
	email: z.string({
		required_error: DEFAULT_ERROR_MSG,
	}).email({
		message: 'Please enter a valid email address!',
	}),
	age: z.number().min(18).max(80),
	date: z.preprocess((val) => new Date(val as string), z.date()),
	firstName: z.string({
		required_error: DEFAULT_ERROR_MSG,
	}),
	lastName: z.string({
		required_error: DEFAULT_ERROR_MSG,
	}),
	middleName: z.string({
		required_error: DEFAULT_ERROR_MSG,
	}),
	languages: z.array(z.string()).min(1, {
		message: 'Please select at least one language!',
	}),
	newsletter: z.enum(['on', 'off'], {
		required_error: DEFAULT_ERROR_MSG,
	}),
	rating: z.number({
		required_error: DEFAULT_ERROR_MSG,
	}).min(3).max(10)
}).partial({
	middleName: true,
	newsletter: true,
	rating: true,
});

export type FormData = z.infer<typeof FormDataSchema>;