import { LitElement, html, css, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { fieldsData } from '../data';
import { Field } from '../interfaces/Field.Interface';
import { FormData, FormDataSchema } from '../interfaces/FormData.Interface';
import { MtyFieldInput } from './mty-field-input';
import './mty-field-input';
import { ZodIssue } from 'zod';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import "@ui5/webcomponents/dist/Title.js";
import './mty-field-radio-group';
import './mty-field-checkbox-group';
import './mty-field-switch';
import './mty-field-rating';
import './mty-field-working-hours';
import './mty-field-select';
import './mty-field-multi-combobox';
import { CustomEventDetail } from '../interfaces/CustomEventDetail.Interface';

@customElement('mty-form-container')
export class MtyFormContainer extends LitElement {

	constructor() {
		super();
	}

	private formFields: NodeListOf<MtyFieldInput> | null = null;
	private FORM_FIELD_CLASS: string = 'mty-field';

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

		:host form .error {
			color: red;
		}

		:host form .section-title {
			grid-column: 1 / -1;
		}

		:host form .full-width {
			grid-column: 1 / -1;
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
			this.formFields = this.renderRoot.querySelectorAll(`.${this.FORM_FIELD_CLASS}`);
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

	private _handleFieldChange(event: Event) {
		const detail = (event as CustomEvent<CustomEventDetail>).detail;

		fieldsData.forEach(field => {
			if (field.dependantField?.name === detail.changedFieldName && field.dependantField?.action) {
				field.dependantField.action(this.getFormFieldByName(field.name)!, event as CustomEvent)
			}
		});

		this.validateData();
	}

	private renderField(field: Field) {
		switch (field.type) {
			case FieldTypeEnum.Text:
			case FieldTypeEnum.Number:
			case FieldTypeEnum.Email:
				case FieldTypeEnum.Date:
				return html`<mty-field-input .initialConfig=${field} class="${this.FORM_FIELD_CLASS}"></mty-field-input>`;
			case FieldTypeEnum.Title:
				return html`<ui5-title level="H2" class="section-title">${field.labelContent}</ui5-title>`;
			case FieldTypeEnum.Radio:
				return html`<mty-field-radio-group .initialConfig=${field} class="${this.FORM_FIELD_CLASS}"></mty-field-radio-group>`;
			case FieldTypeEnum.Checkbox:
				return html`<mty-field-checkbox-group .initialConfig=${field} class="${this.FORM_FIELD_CLASS} full-width"></mty-field-checkbox-group>`;
			case FieldTypeEnum.Switch:
				return html`<mty-field-switch .initialConfig=${field} class="${this.FORM_FIELD_CLASS}"></mty-field-switch>`;
			case FieldTypeEnum.Select:
				return html`<mty-field-select .initialConfig=${field} class="${this.FORM_FIELD_CLASS}"></mty-field-select>`;
			case FieldTypeEnum.MultiComboBox:
				return html`<mty-field-multi-combobox .initialConfig=${field} class="${this.FORM_FIELD_CLASS} full-width"></mty-field-multi-combobox>`;
			case FieldTypeEnum.Rating:
				return html`<mty-field-rating .initialConfig=${field} class="${this.FORM_FIELD_CLASS}"></mty-field-rating>`;
			case FieldTypeEnum.WorkingHours:
				return html`<mty-field-working-hours .initialConfig=${field} class="${this.FORM_FIELD_CLASS} full-width"></mty-field-working-hours>`;
			default:
				return html`<div class="error">Type not supported: ${field.type}</div>`
		}
	}

	override render() {
		return html`
			<form>
				${fieldsData.map((field: Field) => {
					return this.renderField(field);
				})}
			</form>
		`;
	}
}
