import { LitElement, html, css, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldWrapper } from '../interfaces/FieldWrapper.Interface';
import { MtyFieldType } from './mty-custom-components';

@customElement('mty-field-wrapper')
export class MtyFieldWrapper extends LitElement {

	constructor() {
		super();

		this.name = Math.random().toString(36).substring(7);
	}

	static override styles: CSSResult = css`
		:host label {
			display: block;
		}
		:host .error {
			color: red;
		}
		:host .disabled {
			opacity: 0.5;
		}
		:host .helperText-container .helperText {
			font-size: 0.8em;
		}
	`;

	@property({ type: Object })
	initialConfig?: FieldWrapper;

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

	@property({ type: Boolean })
	isHidden?: boolean;

	private getFieldClasses(): string {
		const classes: string[] = ['field-container'];
		if (this.isError) classes.push('error');
		if (this.isDisabled) classes.push('disabled');
		return classes.join(' ');
	}

	private addRequiredStar(): string {
		return this.isRequired ? '*' : '';
	}

	public attachCustomChangeEvent(this: MtyFieldType) {
		this.dispatchEvent(new CustomEvent('mty-field-change', {
			bubbles: true,
			composed: true,
			detail: {
				changedFieldName: this.name,
				changedFieldValue: this.value
			}
		}));
	}

	override firstUpdated() {
		Object.assign(this, this.initialConfig);
	}

	override render() {
		return html`
			<div class="${this.getFieldClasses()}">
				<label for="${this.name}">${this.labelContent}${this.addRequiredStar()}</label>
				<slot></slot>
				<div class="helperText-container">
					<span class="helperText">${this.helperText}</span>
				</div>
			</div>
		`;
	}
}
