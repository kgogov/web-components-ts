import { FieldInput } from "./interfaces/FieldInput.Interface";
import { FieldInputEnum } from "./interfaces/FieldInput.Enum";

export const fieldsData: FieldInput[] = [
	{
		name: 'firstName',
		labelContent: 'First name',
		type: FieldInputEnum.Text,
		value: 'Ivan',
		placeholder: 'Enter your first name',
	}, {
		name: 'middleName',
		labelContent: 'Middle name',
		helperText: 'This field is required',
		isError: true,
		isRequired: true,
		type: FieldInputEnum.Text,
		value: 'Petrov',
		placeholder: 'Enter your middle name',
	}, {
		name: 'lastName',
		labelContent: 'Last name',
		isRequired: true,
		type: FieldInputEnum.Text,
		value: 'Ivanovich',
		placeholder: 'Enter your last name',
	}, {
		name: 'age',
		value: '25',
		labelContent: 'Age',
		isRequired: true,
		type: FieldInputEnum.Number,
		placeholder: 'How old are you?',
	}, {
		name: 'date',
		labelContent: 'Date',
		isRequired: true,
		isDisabled: true,
		type: FieldInputEnum.Date,
		value: '2023-04-05',
	}
];