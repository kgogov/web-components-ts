import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FieldTypeEnum } from '../interfaces/FieldType.Enum';
import { MtyFieldWrapper } from './mty-field-wrapper';
import './mty-field-wrapper';
import "./mty-custom-components";
import "@ui5/webcomponents/dist/RatingIndicator.js";
import RatingIndicator from '@ui5/webcomponents/dist/RatingIndicator.js';

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

	@property({ type: Function })
	onChange?: (e: Event) => void;

	override firstUpdated() {
		Object.assign(this, this.initialConfig);
	}

	private ratingChanged () {
		this.value = (this.renderRoot.querySelector('ui5-rating-indicator') as RatingIndicator).value;
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
					<ui5-rating-indicator
						value="${this.value}"
						max="10"
						?disabled="${this.isDisabled}"
						@change="${this.ratingChanged}"
					></ui5-rating-indicator>
			</mty-field-wrapper>
		`;
	}
}