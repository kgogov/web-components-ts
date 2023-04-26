import { MtyFieldWrapper } from './mty-field-wrapper';
import { MtyFieldInput } from './mty-field-input';
import { MtyFormContainer } from './mty-form-container';
import { MtyFieldRadioGroup } from './mty-field-radio-group';
import { MtyFieldCheckboxGroup } from './mty-field-checkbox-group';
import { MtyFieldSwitch } from './mty-field-switch';
import { MtyFieldRating } from './mty-field-rating';

declare global {
	interface HTMLElementTagNameMap {
		'mty-form-container': MtyFormContainer;
		'mty-field-wrapper': MtyFieldWrapper;
		'mty-field-input': MtyFieldInput;
		'mty-field-radio-group': MtyFieldRadioGroup;
		'mty-field-checkbox-group': MtyFieldCheckboxGroup;
		'mty-field-switch': MtyFieldSwitch;
		'mty-field-rating': MtyFieldRating;
	}
}