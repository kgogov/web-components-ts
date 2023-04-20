import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldInputEnum } from '../interfaces/FieldInput.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";
import { FieldInput } from '../interfaces/FieldInput.Interface';

@customElement('mty-field-input')
export class MtyFieldInput extends LitElement {

	constructor() {
		super();

		this.type = FieldInputEnum.Text;
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

	@property({ type: Object })
	initialConfig?: FieldInput;

	@property({ type: String })
	type: FieldInputEnum;

	@property({ type: String })
	value?: string;

	@property({ type: String })
	name: string;

	@property({ type: String })
	placeholder?: string;

	@property({ type: String })
	labelContent?: string;

	@property({ type: String })
	helperText?: string;

	@property({ type: Boolean })
	isDisabled?: boolean;

	@property({ type: Boolean })
	isError?: boolean;

	@property({ type: Boolean })
	isRequired?: boolean;

	@property({ type: Function })
	onChange?: (e: Event) => void;

	private _onChange(e: Event) {
		this.value = (e.target as HTMLInputElement).value;

		this.dispatchEvent(new CustomEvent('mty-input-change', {
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
				.initialConfig=${this.initialConfig}
				name=${this.name}
				labelContent=${this.labelContent}
				helperText=${this.helperText}
				?isError=${this.isError}
				?isRequired=${this.isRequired}
				?isDisabled=${this.isDisabled}>

				<input @change="${this._onChange}"
					   name="${this.name}"
					   type="${this.type}"
					   value="${this.value ?? ''}"
					   placeholder="${this.placeholder ?? ''}"
					   ?disabled=${this.isDisabled} />
			</mty-field-wrapper>
		`;
	}
}