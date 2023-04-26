import { FieldTypeEnum } from './FieldType.Enum';
import { FieldWrapper } from './FieldWrapper.Interface';
import { FieldOption } from './FieldOption.Interface';

export interface Field extends FieldWrapper {
	type: FieldTypeEnum;
	name: string;
	value?: string;
	placeholder?: string;
	options?: FieldOption[];
	onChange?: (e: Event) => void;
}