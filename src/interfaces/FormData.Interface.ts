import { z } from 'zod';

const DEFAULT_ERROR_MSG: string = 'This field is required!';

export const FormDataSchema = z.object({
	email: z.string({
		required_error: DEFAULT_ERROR_MSG,
	}).email({
		message: 'Please enter a valid email address!',
	}),
	age: z.preprocess((val) => parseInt(z.string().parse(val), 10), z.number().min(18).max(80)),
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
}).partial({
	middleName: true,
});

export type FormData = z.infer<typeof FormDataSchema>;