import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";
import { MtyFieldWrapper } from './mty-field-wrapper';
import { FieldOption } from '../interfaces/FieldOption.Interface';
import "@ui5/webcomponents/dist/CheckBox.js";
import CheckBox from '@ui5/webcomponents/dist/CheckBox';

@customElement('mty-field-checkbox-group')
export class MtyFieldCheckboxGroup extends MtyFieldWrapper {

	constructor() {
		super();

		this.type = FieldTypeEnum.Checkbox;
		this.name = 'checkbox';
		this.options = [];
		this.value = [];
	}

	@property({ type: String })
	type: FieldTypeEnum;

	@property({ type: Array })
	value?: string[];

	@property({ type: Array })
	options: FieldOption[];

	private onCheckChangedHandler = (e: Event) => {
		const checkboxes = this.renderRoot.querySelectorAll('ui5-checkbox[checked]') as NodeListOf<CheckBox>;

		this.value = Array.from(checkboxes).map((checkbox: CheckBox) => checkbox.id);

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

				<div class="checkbox-wrapper">
					${this.options.map((option: FieldOption) => html`
						<ui5-checkbox
							id="${option.id}"
							text="${option.value}"
							@change=${this.onCheckChangedHandler}
							?checked="${this.value?.includes(option.id)}"
							?disabled="${this.isDisabled}"
						></ui5-checkbox>
					`)}
				</div>
			</mty-field-wrapper>
		`;
	}
}