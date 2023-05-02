import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import './mty-field-wrapper';
import "./mty-custom-components";
import { MtyFieldWrapper } from './mty-field-wrapper';
import { FieldOption } from '../interfaces/FieldOption.Interface';
import "@ui5/webcomponents/dist/RangeSlider.js";
import RangeSlider from '@ui5/webcomponents/dist/RangeSlider';
import { ValidationType } from '../interfaces/ValidationType.Interface';

@customElement('mty-field-working-hours')
export class MtyFieldWorkingHours extends MtyFieldWrapper {

	constructor() {
		super();

		this.type = FieldTypeEnum.WorkingHours;
		this.name = 'working-hours';
	}

	@property({ type: String })
	type: FieldTypeEnum;

	@property({ type: Array })
	value?: number[];
	
	@property({ type: Object })
	validation?: ValidationType;

	override firstUpdated() {
		Object.assign(this, this.initialConfig);
	}

	private onRangeChangedHandler = (event: Event) => {
		const range = event.target as RangeSlider;
		this.value = [range.startValue, range.endValue];

		this.dispatchEvent(new CustomEvent('mty-field-change', {
			bubbles: true,
			composed: true,
			detail: {}
		}));
	}

	override render() {
		let initialVals: number[] = [9, 18];
		if (this.value && this.value.length > 1) {
			initialVals = this.value;
		}
		return html`
			<mty-field-wrapper
				name="${this.name}"
				labelContent="${this.labelContent}"
				helperText="${this.helperText}"
				?isError="${this.isError}"
				?isRequired="${this.isRequired}"
				?isDisabled="${this.isDisabled}">
				<ui5-range-slider
					min="${this.validation?.min || 6}"
					max="${this.validation?.max || 20}"
					step="1"
					start-value="${initialVals[0]}"
					end-value="${initialVals[1]}"
					label-interval="2"
					show-tooltip
					show-tickmarks
					?disabled="${this.isDisabled}"
					@change="${this.onRangeChangedHandler}">
				></ui5-range-slider>
			</mty-field-wrapper>
		`;
	}
}