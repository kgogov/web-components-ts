var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './mty-field-wrapper';
import "./mty-custom-components";
let MtyFieldInput = class MtyFieldInput extends LitElement {
    constructor() {
        super();
        this.type = 'text';
    }
    _onChange(e) {
        this.value = e.target.value;
    }
    render() {
        var _a, _b;
        return html `
			<mty-field-wrapper .labelContent="${this.labelContent}">
				<input @change="${this._onChange}"
					   type="${this.type}"
					   value="${(_a = this.value) !== null && _a !== void 0 ? _a : ''}"
					   placeholder="${(_b = this.placeholder) !== null && _b !== void 0 ? _b : ''}"/>
			</mty-field-wrapper>
		`;
    }
};
__decorate([
    property({ type: String })
], MtyFieldInput.prototype, "type", void 0);
__decorate([
    property({ type: String })
], MtyFieldInput.prototype, "value", void 0);
__decorate([
    property({ type: String })
], MtyFieldInput.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], MtyFieldInput.prototype, "labelContent", void 0);
__decorate([
    property({ type: Function })
], MtyFieldInput.prototype, "onChange", void 0);
MtyFieldInput = __decorate([
    customElement('mty-field-input')
], MtyFieldInput);
export { MtyFieldInput };
