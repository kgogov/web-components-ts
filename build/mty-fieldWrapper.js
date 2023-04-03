var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MtyFieldWrapper = class MtyFieldWrapper extends LitElement {
    constructor() {
        super();
        this.name = Math.random().toString(36).substring(7);
    }
    render() {
        return html `
			<div class="field-container">
				<label for="${this.name}">${this.labelContent}</label>
				<slot></slot>
				<div class='helperText-container'>
					<span class='helperText'>${this.helperText}</span>
				</div>
			</div>
		`;
    }
};
__decorate([
    property({ type: String })
], MtyFieldWrapper.prototype, "name", void 0);
__decorate([
    property({ type: String })
], MtyFieldWrapper.prototype, "labelContent", void 0);
__decorate([
    property({ type: String })
], MtyFieldWrapper.prototype, "helperText", void 0);
__decorate([
    property({ type: Boolean })
], MtyFieldWrapper.prototype, "isError", void 0);
__decorate([
    property({ type: Boolean })
], MtyFieldWrapper.prototype, "isRequired", void 0);
__decorate([
    property({ type: Boolean })
], MtyFieldWrapper.prototype, "isDisabled", void 0);
MtyFieldWrapper = __decorate([
    customElement('mty-field-wrapper')
], MtyFieldWrapper);
export { MtyFieldWrapper };
