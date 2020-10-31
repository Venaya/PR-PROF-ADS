import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Header extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE
    _template = () => {
        return html`
            <style>
            </style>

            <div class="container">

            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    //#endregion

    //#region WEBCOMPONENTS
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }
    //#endregion
}

customElements.define('app-header', Header);