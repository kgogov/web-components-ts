import { FieldWrapper } from './FieldWrapper.Interface';
import { FieldTypeEnum } from './FieldType.Enum';

export interface Field extends FieldWrapper {
	type: FieldTypeEnum;
	name: string;
	value?: string;
	placeholder?: string;
	onChange?: (e: Event) => void;
}