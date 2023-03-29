var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MtyElement = class MtyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.value = '';
        this.labelContent = 'Input:';
        this.name = 'mty-input';
    }
    render() {
        return html `
			<div style="margin-bottom: .5em">
				<label for="${this.name}">${this.labelContent}</label>
				<input @change="${this._onChange}" name="${this.name}" type="text" value="${this.value}"/>
				<button @click="${this._onClick}">Submit</button>
			</div>
		`;
    }
    _onClick() {
        alert(this.value);
    }
    _onChange(e) {
        this.value = e.target.value;
    }
};
__decorate([
    property({ type: String })
], MtyElement.prototype, "value", void 0);
__decorate([
    property({ type: String })
], MtyElement.prototype, "labelContent", void 0);
__decorate([
    property({ type: String })
], MtyElement.prototype, "name", void 0);
MtyElement = __decorate([
    customElement('mty-input')
], MtyElement);
export { MtyElement };
