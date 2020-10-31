import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Input extends HTMLElement {
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

                input{
                    background: #e6e6e6;
                    border-radius: 3px;
                    height: 35px;
                    outline: none;
                    border: none;

                    line-height: 50px;
                    background: #fafafa;
                    box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.3);
                    border-radius: 5px;
                    padding: 0 20px;
                    color: #666;
                    transition: all 0.4s ease;

                    min-width: 10vw;
                }

                input:focus ~ label{
                    opacity: 1;
                }
            </style>

            <div class="container">  
                <label for="${this.Id}">${this.Label}</label>     
                <input form="${this.Form}" id="${this.Id}" placeholder="${this.Label}" name="${this.Name}" type="${this.Type}" value="${this.Value}" />                            
            </div>
        `;
    }

    _updateValue = () => {
        this.Value = this.shadowRoot.querySelector('input').value;
        console.log('updated value: ' + this.Value);
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    //#endregion

    //#region WEB COMPONENT FUNCTIONS
    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
        this.addEventListener('keyup', () => {
            console.log('KeyUp Event');
            this._updateValue();
        });
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

    set Id(newValue) {
        if (this.hasAttribute('id')) this.setAttribute('id', newValue);
    }

    get Label() {
        if (this.hasAttribute('label')) return this.getAttribute('label');
    }

    set Label(newValue) {
        if (this.hasAttribute('label')) this.setAttribute('label', newValue);
    }

    get Placeholder() {
        if (this.hasAttribute('placeholder')) return this.getAttribute('placeholder');
    }

    set Placeholder(newValue) {
        if (this.hasAttribute('placeholder')) this.setAttribute('placeholder', newValue);
    }

    get Name() {
        if (this.hasAttribute('name')) return this.getAttribute('name');
    }

    set Name(newValue) {
        if (this.hasAttribute('name')) this.setAttribute('name', newValue);
    }

    get Value() {
        if (this.hasAttribute('value')) return this.getAttribute('value');
    }

    set Value(newValue) {
        if (this.hasAttribute('value')) this.setAttribute('value', newValue);
    }

    get Type() {
        if (this.hasAttribute('type')) return this.getAttribute('type');
    }

    set Type(newValue) {
        if (this.hasAttribute('type')) this.setAttribute('type', newValue);
    }

    get Form(){
        if (this.hasAttribute('form')) return this.getAttribute('form');
    }
    //#endregion
}

customElements.define('app-input', Input);