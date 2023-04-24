import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";
import { MtyFieldWrapper } from './mty-field-wrapper';
import { FieldOption } from '../interfaces/FieldOption.Interface';
import "@ui5/webcomponents/dist/CheckBox.js";

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

	@property({ type: Function })
	onChange?: (e: Event) => void;

	private onCheckChangedHandler = (e: Event) => {
		const checkboxes = this.renderRoot.querySelectorAll('ui5-checkbox[checked]') as NodeListOf<HTMLInputElement>;

		this.value = Array.from(checkboxes).map((checkbox: HTMLInputElement) => checkbox.id);
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

				<div class="checkbox-wrapper">
					${this.options.map((option: FieldOption) => html`
						<ui5-checkbox id=${option.id} text=${option.value} @change=${this.onCheckChangedHandler} ?disabled=${this.isDisabled}></ui5-checkbox>
					`)}
				</div>
			</mty-field-wrapper>
		`;
	}
}