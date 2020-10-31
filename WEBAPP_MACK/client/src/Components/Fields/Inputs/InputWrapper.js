import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class InputWrapper extends HTMLElement {
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

                ::slotted(input){
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

                ::slotted(select){
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

                ::slotted(input:focus ~ label){
                    opacity: 1;
                }
            </style>

            <div class="container">  
                <label for="${this.Id}">${this.Label}</label>     
                <slot />
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

    get Value() {
        if (this.hasAttribute('value')) return this.getAttribute('value');
    }

    set Value(newValue) {
        if (this.hasAttribute('value')) this.setAttribute('value', newValue);
    }
    //#endregion
}

customElements.define('app-inputwrapper', InputWrapper);