import { FieldTypeEnum } from './FieldType.Enum';
import { FieldWrapper } from './FieldWrapper.Interface';
import { FieldOption } from './FieldOption.Interface';

export interface Field extends FieldWrapper {
	type: FieldTypeEnum;
	name: string;
	value?: string | number | string[] | number[];
	placeholder?: string;
	options?: FieldOption[];
}