import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";
import { MtyFieldWrapper } from './mty-field-wrapper';
import { FieldOption } from '../interfaces/FieldOption.Interface';
import MultiComboBox from "@ui5/webcomponents/dist/MultiComboBox";
import "@ui5/webcomponents/dist/MultiComboBox.js";
import MultiComboBoxItem from "@ui5/webcomponents/dist/MultiComboBoxItem";
import "@ui5/webcomponents/dist/MultiComboBoxItem.js";

@customElement('mty-field-multi-combobox')
export class MtyFieldMultiCombobox extends MtyFieldWrapper {

	constructor() {
		super();

		this.type = FieldTypeEnum.MultiComboBox;
		this.name = 'multiCombobox';
		this.options = [];
		this.value = [];
	}

	@property({ type: String })
	type: FieldTypeEnum;

	@property({ type: Array })
	value?: string[];

	@property({ type: String })
	placeholder?: string;

	@property({ type: Array })
	options: FieldOption[];

	private onMultiComboboxChangedHandler = (event: Event) => {
		const multiCombobox = event.target as MultiComboBox;
		const selectedItems = multiCombobox.selectedValues as MultiComboBoxItem[];

		this.value = selectedItems.map((item: MultiComboBoxItem) => item.id);

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

				<ui5-multi-combobox ?disabled="${this.isDisabled}" @selection-change=${this.onMultiComboboxChangedHandler} placeholder="${this.placeholder}">
					${this.options.map((option: FieldOption) => html`
						<ui5-mcb-item
							id="${option.id}"
							text="${option.value}"
							?selected="${this.value?.includes(option.id)}">
					</ui5-mcb-item>
					`)}
				</ui5-multi-combobox>
			</mty-field-wrapper>
		`;
	}
}