import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mty-field-wrapper')
export class MtyFieldWrapper extends LitElement {

	constructor() {
		super();

		this.name = Math.random().toString(36).substring(7);
	}

	@property({ type: String })
	name: string;

	@property({ type: String })
	labelContent?: string;

	@property({ type: String })
	helperText?: string;

	@property({ type: Boolean })
	isError?: boolean;

	@property({ type: Boolean })
	isRequired?: boolean;

	@property({ type: Boolean })
	isDisabled?: boolean;

	override render() {
		return html`
			<div class="field-container">
				<label for="${this.name}">${this.labelContent}</label>
				<slot></slot>
				<div class="helperText-container">
					<span class="helperText">${this.helperText}</span>
				</div>
			</div>
		`;
	}
}
