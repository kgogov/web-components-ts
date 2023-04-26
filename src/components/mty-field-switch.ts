import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import { MtyFieldWrapper } from './mty-field-wrapper';
import './mty-field-wrapper';
import "./mty-custom-components";
import { FieldOption } from '../interfaces/FieldOption.Interface';
import "@ui5/webcomponents/dist/Switch.js";
import Switch from '@ui5/webcomponents/dist/Switch.js';

@customElement('mty-field-switch')
export class MtyFieldSwitch extends MtyFieldWrapper {

	constructor() {
		super();

		this.type = FieldTypeEnum.Switch;
		this.name = 'switch';
		this.options = [];
	}

	static override styles = css``;

	@property({ type: String })
	type: FieldTypeEnum;

	@property({ type: String })
	value?: string;

	@property({ type: String })
	placeholder?: string;

	@property({ type: Array })
	options: FieldOption[];

	override firstUpdated() {
		Object.assign(this, this.initialConfig);
	}

	private switchChanged (event: Event) {
		const isChecked: boolean = (event.target as Switch).checked;
		this.value = isChecked ? this.options[0].id : this.options[1].id;

		this.dispatchEvent(new CustomEvent('mty-field-change', {
			bubbles: true,
			composed: true,
			detail: {}
		}));
	}

	override render() {
		return html`
			<mty-field-wrapper
				name=${this.name}
				labelContent=${this.labelContent}
				helperText=${this.helperText}
				?isError=${this.isError}
				?isRequired=${this.isRequired}
				?isDisabled=${this.isDisabled}>
					${(this.options.length > 1) ?
						html`<ui5-switch
								?checked="${this.value === this.options[0].id}"
								?disabled="${this.isDisabled}"
								text-on="${this.options[0].value}"
								text-off="${this.options[1].value}"
								@change="${this.switchChanged}"
							></ui5-switch>` :
						nothing}
			</mty-field-wrapper>
		`;
	}
}