import { MtyFieldInput } from "./components/mty-field-input";
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
		isRequired: true
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
	}, {
		name: 'email',
		labelContent: 'Email',
		type: FieldTypeEnum.Email,
		isRequired: true,
		value: 'asd@abv.bg',
		placeholder: 'Enter your email',
	}, {
		name: 'date',
		labelContent: 'Birthdate',
		isRequired: true,
		type: FieldTypeEnum.Date,
		validation: {
			max: new Date().toISOString().split('T')[0],
		}
	}, {
		name: 'age',
		labelContent: 'Age',
		isRequired: true,
		isDisabled: true,
		type: FieldTypeEnum.Number,
		placeholder: 'How old are you?',
		helperText: 'Note: Enter your birthdate to fill this field.',
		validation: {
			min: 18,
			max: 80,
		},
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
		value: 'UK',
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
		name: 'currency',
		labelContent: 'Which currency do you prefer?',
		type: FieldTypeEnum.Radio,
		isRequired: true,
		options: [{
			id: 'bgn',
			value: 'BGN'
		}, {
			id: 'eur',
			value: 'EUR'
		}, {
			id: 'usd',
			value: 'USD'
		}]
	}, {
		name: 'otherLanguages',
		labelContent: 'Do you speak any other languages?',
		type: FieldTypeEnum.Radio,
		isRequired: true,
		value: 'no',
		options: [{
			id: 'yes',
			value: 'yes'
		}, {
			id: 'no',
			value: 'no'
		}]
	}, {
		name: 'languages',
		labelContent: 'Which of the following languages do you speak?',
		type: FieldTypeEnum.Checkbox,
		isRequired: true,
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
		}, {
			id: 'de',
			value: 'German'
		}, {
			id: 'it',
			value: 'Italian'
		}, {
			id: 'es',
			value: 'Spanish'
		}, {
			id: 'zl',
			value: 'Zulu'
		}],
	}, {
		name: 'places',
		labelContent: 'Which of the following places have you visited?',
		type: FieldTypeEnum.MultiComboBox,
		helperText: 'Note: You can select multiple places.',
		isRequired: true,
		placeholder: 'Select places',
		value: ['en', 'fr'],
		options: [{
			id: 'bg',
			value: 'Bulgarian'
		}, {
			id: 'en',
			value: 'English'
		}, {
			id: 'fr',
			value: 'French'
		}, {
			id: 'de',
			value: 'German'
		}, {
			id: 'it',
			value: 'Italian'
		}, {
			id: 'es',
			value: 'Spanish'
		}, {
			id: 'zl',
			value: 'Zulu'
		}],
	}, {
		name: 'working_hours',
		labelContent: 'What is your window for working hours?',
		type: FieldTypeEnum.WorkingHours,
		isRequired: true,
		value: [9, 18],
		validation: {
			min: 6,
			max: 20,
		},
	}, {
		name: 'feedback',
		labelContent: 'Feedback (optional)',
		type: FieldTypeEnum.Title,
	}, {
		name: 'newsletter',
		labelContent: 'Subscribe to our newsletter?',
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
		labelContent: 'Want to rate your experience?',
		type: FieldTypeEnum.Rating,
		value: 8.7,
		validation: {
			max: 10,
		}
	}
];