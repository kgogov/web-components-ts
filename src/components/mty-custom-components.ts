import { MtyFieldWrapper } from './mty-field-wrapper';
import { MtyFieldInput } from './mty-field-input';
import { MtyFormContainer } from './mty-form-container';
import { MtyFieldCheckboxGroup } from './mty-field-checkbox-group';

declare global {
	interface HTMLElementTagNameMap {
		'mty-form-container': MtyFormContainer;
		'mty-field-wrapper': MtyFieldWrapper;
		'mty-field-input': MtyFieldInput;
		'mty-field-checkbox-group': MtyFieldCheckboxGroup;
	}
}