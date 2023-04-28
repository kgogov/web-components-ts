import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";
import { MtyFieldWrapper } from './mty-field-wrapper';
import { FieldOption } from '../interfaces/FieldOption.Interface';
import Select from "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/Select.js";
import Option from "@ui5/webcomponents/dist/Option";
import "@ui5/webcomponents/dist/Option.js";

@customElement('mty-field-select')
export class MtyFieldSelect extends MtyFieldWrapper {

	constructor() {
		super();

		this.type = FieldTypeEnum.Select;
		this.name = 'select';
		this.options = [];
	}

	@property({ type: String })
	type: FieldTypeEnum;

	@property({ type: String })
	value?: string;

	@property({ type: String })
	placeholder?: string;

	@property({ type: Array })
	options: FieldOption[];

	private onSelectChangedHandler = (event: Event) => {
		const select = event.target as Select;
		const option: Option | undefined = select.selectedOption;

		if (!option) {
			return;
		}

		this.value = option.id;

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
				.initialConfig=${this.initialConfig}
				name=${this.name}
				labelContent=${this.labelContent}
				helperText=${this.helperText}
				?isError=${this.isError}
				?isRequired=${this.isRequired}
				?isDisabled=${this.isDisabled}>

				<ui5-select ?disabled="${this.isDisabled}" @change=${this.onSelectChangedHandler}>
					${this.options.map((option: FieldOption) => html`
						<ui5-option
							id="${option.id}"
							?selected="${option.id === this.value}"
						>${option.value}
					</ui5-option>
					`)}
				</ui5-select>
			</mty-field-wrapper>
		`;
	}
}