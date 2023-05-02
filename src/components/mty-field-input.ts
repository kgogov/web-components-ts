import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";
import { MtyFieldWrapper } from './mty-field-wrapper';
import { ValidationType } from '../interfaces/ValidationType.Interface';

@customElement('mty-field-input')
export class MtyFieldInput extends MtyFieldWrapper {

	constructor() {
		super();

		this.type = FieldTypeEnum.Text;
		this.name = '';
	}

	static override styles = css`
		:host input {
			font-size: inherit;
			font-family: inherit;
			box-sizing: border-box;
			padding: 0.5em;
			width: 100%;
			border: solid 1px gray;
			border-radius: 0.2em;
		}
	`;

	@property({ type: String })
	type: FieldTypeEnum;

	@property({ type: String })
	value?: string | number;

	@property({ type: String })
	placeholder?: string;

	@property({ type: Object })
	validation?: ValidationType;

	private _onChange(e: Event) {
		const val: string = (e.target as HTMLInputElement).value
		this.value = this.type === FieldTypeEnum.Number ? parseInt(val, 10) : val;

		this.dispatchEvent(new CustomEvent('mty-field-change', {
			bubbles: true,
			composed: true,
			detail: {}
		}));
	}

	override firstUpdated() {
		Object.assign(this, this.initialConfig);
	}

	override render() {
		return html`
			<mty-field-wrapper
				name="${this.name}"
				labelContent="${this.labelContent}"
				helperText="${this.helperText}"
				?isError="${this.isError}"
				?isRequired="${this.isRequired}"
				?isDisabled="${this.isDisabled}">

				<input @change="${this._onChange}"
					   name="${this.name}"
					   type="${this.type}"
					   value="${this.value ?? ''}"
					   placeholder="${this.placeholder ?? ''}"
					   min="${this.validation?.min ?? ''}"
					   max="${this.validation?.max ?? ''}"
					   ?disabled=${this.isDisabled} />
			</mty-field-wrapper>
		`;
	}
}