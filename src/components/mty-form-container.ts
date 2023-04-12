import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { fieldsData } from '../data';
import { FieldInput } from '../interfaces/FieldInput.Interface';
import { MtyFieldInput } from './mty-field-input';
import './mty-field-input';

@customElement('mty-form-container')
export class MtyFormContainer extends LitElement {

	constructor() {
		super();
	}

	public getData() {
		const data: Record<string, string> = {};
		this.shadowRoot?.querySelectorAll('mty-field-input').forEach(({name, value}: MtyFieldInput) => {
			Object.assign(data, {
				[name]: value
			});
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
