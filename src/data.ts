import { Field } from "./interfaces/Field.Interface";
import { FieldTypeEnum } from "./interfaces/FieldType.Enum";

export const fieldsData: Field[] = [
	{
		name: 'personalInfo',
		labelContent: 'Personal information',
		type: FieldTypeEnum.Title,
	}, {
		name: 'firstName',
		labelContent: 'First name',
		type: FieldTypeEnum.Text,
		placeholder: 'Enter your first name',
		isRequired : true
	}, {
		name: 'middleName',
		labelContent: 'Middle name',
		type: FieldTypeEnum.Text,
		placeholder: 'Enter your middle name',
	}, {
		name: 'lastName',
		labelContent: 'Last name',
		isRequired: true,
		type: FieldTypeEnum.Text,
		value: 'Ivanovich',
		placeholder: 'Enter your last name',
	},{
		name: 'email',
		labelContent: 'Email',
		type: FieldTypeEnum.Email,
		value: 'asd@abv.bg',
		placeholder: 'Enter your email',
	}, {
		name: 'age',
		value: '25',
		labelContent: 'Age',
		isRequired: true,
		type: FieldTypeEnum.Number,
		placeholder: 'How old are you?',
	}, {
		name: 'date',
		labelContent: 'Date',
		isRequired: true,
		isDisabled: true,
		type: FieldTypeEnum.Date,
		value: '2023-04-05',
	}
];