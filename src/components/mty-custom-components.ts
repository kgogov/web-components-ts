import { MtyFieldWrapper } from './mty-field-wrapper';
import { MtyFieldInput } from './mty-field-input';
import { MtyFormContainer } from './mty-form-container';

declare global {
	interface HTMLElementTagNameMap {
		'mty-form-container': MtyFormContainer;
		'mty-field-wrapper': MtyFieldWrapper;
		'mty-field-input': MtyFieldInput;
	}
}