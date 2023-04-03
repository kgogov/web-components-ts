import { MtyFieldWrapper } from './mty-field-wrapper';
import { MtyFieldInput } from './mty-field-input';

declare global {
	interface HTMLElementTagNameMap {
		'mty-field-wrapper': MtyFieldWrapper;
		'mty-field-input': MtyFieldInput;
	}
}