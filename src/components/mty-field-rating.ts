import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import { MtyFieldWrapper } from './mty-field-wrapper';
import './mty-field-wrapper';
import "./mty-custom-components";
import "@ui5/webcomponents/dist/RatingIndicator.js";
import RatingIndicator from '@ui5/webcomponents/dist/RatingIndicator';
import { ValidationType } from '../interfaces/ValidationType.Interface';

@customElement('mty-field-rating')
export class MtyFieldRating extends MtyFieldWrapper {

	constructor() {
		super();

		this.type = FieldTypeEnum.Rating;
		this.name = 'rating';
	}

	static override styles = css``;

	@property({ type: String })
	type: FieldTypeEnum;

	@property({ type: Number })
	value?: number;

	@property({ type: String })
	placeholder?: string;
	
	@property({ type: Object })
	validation?: ValidationType;

	override firstUpdated() {
		Object.assign(this, this.initialConfig);
	}

	private ratingChanged (event: Event) {
		this.value = (event.target as RatingIndicator).value;
		
		this.dispatchEvent(new CustomEvent('mty-field-change', {
			bubbles: true,
			composed: true,
			detail: {}
		}));
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
					<ui5-rating-indicator
						value="${this.value}"
						max="${this.validation?.max}"
						?disabled="${this.isDisabled}"
						@change="${this.ratingChanged}"
					></ui5-rating-indicator>
			</mty-field-wrapper>
		`;
	}
}