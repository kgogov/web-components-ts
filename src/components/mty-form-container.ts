import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { fieldsData } from '../data';
import { FieldInput } from '../interfaces/FieldInput.Interface';
import './mty-field-input';

@customElement('mty-form-container')
export class MtyFormContainer extends LitElement {

	constructor() {
		super();
	}

	public getData() {
		const data: Record<string, string> = {};
		this.shadowRoot?.querySelectorAll('mty-field-input').forEach((field: any) => {
			data[field.config.name] = field.value;
		});
		return data;
	}

	override render() {
		return html`
			<form>
				${fieldsData.map((field: FieldInput) => {
					return html`
						<mty-field-input .config=${field}></mty-field-input>
					`;
				})}
			</form>
		`;
	}
}
