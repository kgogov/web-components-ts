import { z } from 'zod';

const DEFAULT_ERROR_MSG: string = 'This field is required!';

export const FormDataSchema = z.object({
	email: z.string({
		required_error: DEFAULT_ERROR_MSG,
	}).email({
		message: 'Please enter a valid email address!',
	}),
	age: z.number({
		required_error: DEFAULT_ERROR_MSG,
	}).min(18).max(80),
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
	currency: z.enum(['bgn', 'eur', 'usd'], {
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
	}).min(3).max(10),
	working_hours: z.array(z.number()).length(2).refine((val) => {
		return val[1] - val[0] >= 4;
	}, {
		message: "You must provide a 4 hour window!",
	}).refine((val) => {
		return val[1] - val[0] <= 10;
	}, {
		message: "Your window can't exceed 10 hours!",
	}),
	country: z.string({
		required_error: DEFAULT_ERROR_MSG,
	}),
	places: z.array(z.string()).min(2, {
		message: 'Please select at least two places!',
	}).max(5, {
		message: 'Please select no more than five places!',
	}),
	otherLanguages: z.enum(['yes', 'no'], {
		required_error: DEFAULT_ERROR_MSG
	})
}).partial({
	middleName: true,
	newsletter: true,
	rating: true,
});

export type FormData = z.infer<typeof FormDataSchema>;

export interface User extends FormData {
	id: string;
}