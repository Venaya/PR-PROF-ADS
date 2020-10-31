import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Select extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        template.innerHTML = this._template();
    }

    //#region PRIVATE FUNCTIONS
    _template = () => {
        return html`
            <style>
                .container{
                    display: flex;
                    flex-flow: column nowrap;
                    position: relative;
                    
                    width: 100%;
                    height: 100%;

                    padding-top: 5px;
                    padding-bottom: 5px;
                }                   

                label{
                    font-weight: bold;
                    opacity: 0.7;
                }
            </style>

            <div class="container">  
                <label for="${this.Id}">${this.Label}</label>     
                <select id="${this.Id}" name="${this.Name}">
                    <slot />
                </select>                         
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    //#endregion

    //#region WEB COMPONENT FUNCTIONS
    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }

    static get observedAttributes() {
        return ['value'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        console.log(`${this.Id} ${attr} has changed from ${oldValue} to ${newValue}`);
        
    }
    //#endregion

    //#region CUSTOM EVENTS
    _onchangedValue = (event) => {
        const keyEvent = new Event('keyup', { bubbles: true, composed: true });
        event.target.dispatchEvent(keyEvent);
    }
    //#endregion

    //#region GETTERS SETTERS
    get Id() {
        if (this.hasAttribute('id')) return this.getAttribute('id');
    }

    get Label() {
        if (this.hasAttribute('label')) return this.getAttribute('label');
    }

    get Name() {
        if (this.hasAttribute('name')) return this.getAttribute('name');
    }

    get Value() {
        if (this.hasAttribute('value')) return this.getAttribute('value');
    }
    //#endregion
}

customElements.define('app-select', Select);