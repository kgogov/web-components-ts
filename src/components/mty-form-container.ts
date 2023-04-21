import { LitElement, html, css, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { fieldsData } from '../data';
import { Field } from '../interfaces/Field.Interface';
import { FormData, FormDataSchema } from '../interfaces/FormData.Interface';
import { MtyFieldInput } from './mty-field-input';
import './mty-field-input';
import { ZodIssue } from 'zod';

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
		const invalidFields: ZodIssue[] = validationResult.success ? [] : validationResult.error.issues;

		this.getAllFormFields().forEach((field: MtyFieldInput) => {
			const current: ZodIssue | undefined = invalidFields.find(({ path }) => path.join() === field.name);

			if (current) {
				field.isError = true;
				field.helperText = current.message;
			} else {
				field.isError = false;
				field.helperText = '';
			}
		});

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

	override connectedCallback() {
		super.connectedCallback();
		this.addEventListener('mty-field-change', this._handleFieldChange);
	}

	override disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener('mty-field-change', this._handleFieldChange);
	}

	private _handleFieldChange = () => {
		this.validateData();
	}

	override render() {
		return html`
			<form>
				${fieldsData.map((field: Field) => {
					return html`<mty-field-input .initialConfig=${field}></mty-field-input>`;
				})}
			</form>
		`;
	}
}
