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

	private formFields: NodeListOf<MtyFieldInput> | null = null;

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
		const validationResult = FormDataSchema.safeParse(data);

		if (validationResult.success) {
			this.getAllFormFields().forEach((field: MtyFieldInput) => {
				field.isError = false;
				field.helperText = '';
			});
		} else {
			validationResult.error.issues.forEach(({ path, message }) => {
				const field = this.getFormFieldByName(path.join());
				if (field) {
					field.isError = true;
					field.helperText = message;
				}
			});
		}

		return validationResult;
	}

	public getData(): Partial<FormData> {
		const data: FormData = {} as FormData;
		this.getAllFormFields().forEach(({ name, value }: MtyFieldInput) => {
			if (!name || !value) return;

			Object.assign(data, {
				[name]: value
			});
		});

		return data;
	}

	public getAllFormFields(): NodeListOf<MtyFieldInput> {
		if (!this.formFields || this.formFields?.length === 0) {
			this.formFields = this.renderRoot.querySelectorAll('mty-field-input');
		}

		return this.formFields as NodeListOf<MtyFieldInput>;
	}

	public getFormFieldByName(name: string): MtyFieldInput | undefined {
		return Array.from(this.getAllFormFields()).find(field => field.name === name);
	}

	override render() {
		return html`
			<form>
				${fieldsData.map((field: FieldInput) => {
					return html`<mty-field-input .initialConfig=${field}></mty-field-input>`;
				})}
			</form>
		`;
	}
}
