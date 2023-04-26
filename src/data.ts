import { Field } from "./interfaces/Field.Interface";
import { FieldTypeEnum } from "./interfaces/FieldType.Enum";

export const fieldsData: Field[] = [
	{
		name: 'personalInfoTitle',
		labelContent: 'Personal information',
		type: FieldTypeEnum.Title,
	}, {
		name: 'firstName',
		value: 'Ivan',
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
		value: 25,
		labelContent: 'Age',
		isRequired: true,
		type: FieldTypeEnum.Number,
		placeholder: 'How old are you?',
	}, {
		name: 'date',
		labelContent: 'Birthdate',
		isRequired: true,
		isDisabled: true,
		type: FieldTypeEnum.Date,
		value: '2023-04-05',
	}, {
		name: 'additionalInfoTitle',
		labelContent: 'Additional information',
		type: FieldTypeEnum.Title,
	}, {
		name: 'country',
		labelContent: 'Country',
		type: FieldTypeEnum.Select,
		isRequired: true,
		placeholder: 'Where are you from?',
		options: [{
			id: 'BG',
			value: 'Bulgaria'
		}, {
			id: 'ES',
			value: 'Spain'
		}, {
			id: 'UK',
			value: 'United Kingdom'
		}]
	}, {
		name: 'languages',
		labelContent: 'Which of the following languages do you speak?',
		type: FieldTypeEnum.Checkbox,
		value: ['bg'],
		options: [{
			id: 'bg',
			value: 'Bulgarian'
		}, {
			id: 'en',
			value: 'English'
		}, {
			id: 'fr',
			value: 'French'
		}],
		isDisabled: false
	}, {
		name: 'currency',
		labelContent: 'Which currency do you prefer?',
		type: FieldTypeEnum.Radio,
		isRequired: true,
		options: [{
			id: 'bgn',
			value: 'Bulgarian lev'
		}, {
			id: 'eur',
			value: 'Euro'
		}, {
			id: 'usd',
			value: 'United states dollar'
		}]
	}, {
		name: 'working_hours',
		labelContent: 'What is your window for working hours?',
		type: FieldTypeEnum.WorkingHours,
	}, {
		name: 'barcode',
		labelContent: 'Scan your badge barcode.',
		type: FieldTypeEnum.BarcodeScanner,
	}, {
		name: 'feedback',
		labelContent: 'Feedback (optional)',
		type: FieldTypeEnum.Title,
	}, {
		name: 'newsletter',
		labelContent: 'Do you want to subscribe to our newsletter?',
		type: FieldTypeEnum.Switch,
		value: 'on',
		options: [{
			id: 'on',
			value: 'Yes'
		}, {
			id: 'off',
			value: 'No'
		}]
	}, {
		name: 'rating',
		labelContent: 'Would you like to rate your experience?',
		type: FieldTypeEnum.Rating,
		value: 8.7
	}
];