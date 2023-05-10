import { MtyFieldType } from '../components/mty-custom-components';
import { FieldWrapper } from './FieldWrapper.Interface';
import { FieldOption } from './FieldOption.Interface';
import { ValidationType } from './ValidationType.Interface';
import { CustomEventDetail } from './CustomEventDetail.Interface';
import { FieldTypeEnum } from './FieldType.Enum';

export interface Field extends FieldWrapper {
	type: FieldTypeEnum;
	name: string;
	value?: string | number | string[] | number[];
	placeholder?: string;
	options?: FieldOption[];
	validation?: ValidationType;
	dependantField?: {
		name: string;
		action: (formField: MtyFieldType, event: CustomEvent<CustomEventDetail>) => void;
	}
}