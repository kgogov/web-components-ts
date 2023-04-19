import { FieldInput } from "./interfaces/FieldInput.Interface";
import { FieldInputEnum } from "./interfaces/FieldInput.Enum";

export const fieldsData: FieldInput[] = [
	{
		name: 'firstName',
		labelContent: 'First name',
		type: FieldInputEnum.Text,
		placeholder: 'Enter your first name',
		isRequired : true
	}, {
		name: 'middleName',
		labelContent: 'Middle name',
		type: FieldInputEnum.Text,
		placeholder: 'Enter your middle name',
	}, {
		name: 'lastName',
		labelContent: 'Last name',
		isRequired: true,
		type: FieldInputEnum.Text,
		value: 'Ivanovich',
		placeholder: 'Enter your last name',
	},{
		name: 'email',
		labelContent: 'Email',
		type: FieldInputEnum.Email,
		value: 'asd@abv.bg',
		placeholder: 'Enter your email',
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