import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mty-input')
export class MtyElement extends LitElement {

	@property({ type: String })
	value = '';

	@property({ type: String })
	labelContent = 'Input';

	@property({ type: String })
	name = 'mty-input';

	override render() {
		return html`
			<div style="margin-bottom: .5em">
				<label for="${this.name}">${this.labelContent}</label>
				<input @change="${this._onChange}" name="${this.name}" type="text" value="${this.value}"/>
				<button @click="${this._onClick}">Submit</button>
			</div>
		`;
	}

	private _onClick(): void {
		alert(this.value);
	}

	private _onChange(e: Event) {
		this.value = (e.target as HTMLInputElement).value;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'mty-element': MtyElement;
	}
}
