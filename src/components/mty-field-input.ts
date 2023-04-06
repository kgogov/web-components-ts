import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldInputEnum } from '../interfaces/FieldInput.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";

@customElement('mty-field-input')
export class MtyFieldInput extends LitElement {

	constructor() {
		super();

		this.type = FieldInputEnum.Text;
	}

	@property({ type: String })
	type: FieldInputEnum;

	@property({ type: String })
	value?: string;

	@property({ type: String })
	placeholder?: string;

	@property({ type: String })
	labelContent?: string;

	@property({ type: Function })
	onChange?: (e: Event) => void;

	private _onChange(e: Event) {
		this.value = (e.target as HTMLInputElement).value;
	}

	override render() {
		return html`
			<mty-field-wrapper .labelContent="${this.labelContent}">
				<input @change="${this._onChange}"
					   type="${this.type}"
					   value="${this.value ?? ''}"
					   placeholder="${this.placeholder ?? ''}"/>
			</mty-field-wrapper>
		`;
	}
}