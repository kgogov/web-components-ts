import { LitElement, html, css, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { fieldsData } from '../data';
import { FieldInput } from '../interfaces/FieldInput.Interface';
import { FormData, FormDataSchema } from '../interfaces/FormData.Interface';
import { MtyFieldInput } from './mty-field-input';
import './mty-field-input';

@customElement('mty-form-container')
export class MtyFormContainer extends LitElement {

	constructor() {
		super();
	}

	static override styles: CSSResult = css`
		:host form {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 1em;
			border: solid 1px gray;
			padding: 1em;
			max-width: 800px;
			margin: 5em auto;
			border-radius: 0.2em;
		}
	`;

	public validateData() {
		const data = this.getData();
		return FormDataSchema.parse(data);
	}

	public getData(): Partial<FormData> {
		const data: FormData = {} as FormData;
		this.shadowRoot?.querySelectorAll('mty-field-input').forEach(({ name, value }: MtyFieldInput) => {
			if (!name || !value) return;

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
