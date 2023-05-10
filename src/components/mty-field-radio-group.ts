import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";
import { MtyFieldWrapper } from './mty-field-wrapper';
import { FieldOption } from '../interfaces/FieldOption.Interface';
import "@ui5/webcomponents/dist/RadioButton.js";
import RadioButton from '@ui5/webcomponents/dist/RadioButton';

@customElement('mty-field-radio-group')
export class MtyFieldRadioGroup extends MtyFieldWrapper {

	constructor() {
		super();

		this.type = FieldTypeEnum.Radio;
		this.name = 'radio';
		this.options = [];
	}

	@property({ type: String })
	type: FieldTypeEnum;

	@property({ type: String })
	value?: string;

	@property({ type: Array })
	options: FieldOption[];

	override firstUpdated() {
		Object.assign(this, this.initialConfig);
	}

	private onRadioChangedHandler = (e: Event) => {
		const radio = this.renderRoot.querySelector('ui5-radio-button[checked]') as RadioButton;
		this.value = radio.id;

		this.attachCustomChangeEvent.call(this);
	}

	override render() {
		this.style.display = this.isHidden ? 'none' : '';

		return html`
			<mty-field-wrapper
				name="${this.name}"
				labelContent="${this.labelContent}"
				helperText="${this.helperText}"
				?isError="${this.isError}"
				?isRequired="${this.isRequired}"
				?isDisabled="${this.isDisabled}">

				<div class="radio-wrapper">
					${this.options.map((option: FieldOption) => html`
						<ui5-radio-button
							id="${option.id}"
							text="${option.value}"
							name=${this.name}
							@change=${this.onRadioChangedHandler}
							?checked="${this.value === option.id}"
							?disabled="${this.isDisabled}"
						></ui5-radio-button>
					`)}
				</div>
			</mty-field-wrapper>
		`;
	}
}