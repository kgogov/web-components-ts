import { FieldWrapper } from './FieldWrapper.Interface';
import { FieldInputEnum } from './FieldInput.Enum';

export interface Field extends FieldWrapper {
	type: FieldInputEnum;
	value?: string;
	placeholder?: string;
	onChange?: (e: Event) => void;
}