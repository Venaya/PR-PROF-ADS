import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Filter extends HTMLElement {
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
                    padding: 0 10px;
                    color: #666;
                    transition: all 0.4s ease;

                    min-width: 10vw;
                }

                span{
                    position: absolute;
                    font-size: 30px;
                    font-weight: bold;
                    right: 5px;
                    opacity: 0.7;
                    margin-left: 10px;
                }

                span:hover{
                    cursor: pointer;
                    opacity: 1;
                }
            </style>

            <div class="container">     
                <input id="${this.Id}" placeholder="${this.Placeholder}" maxlength="25" type="text" value="${this.Value}"> 
                    <span onclick="${this._click()}">
                        &#9746;
                    </span>
                </input>                           
            </div>
        `;
    }

    _updateValue = (e) => {
        this._onfilterChanged(e);
        this.Value = this.shadowRoot.querySelector('input').value;
        console.log('updated value: ' + this.Value);
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _click = () => {
        console.log('clicked');
    }

    _clean = () => {
        this.shadowRoot.querySelector('input').value = "";
        this.Value = "";
    }
    //#endregion

    //#region WEB COMPONENT FUNCTIONS
    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
        this.addEventListener('keyup', this._updateValue);
    }

    static get observedAttributes() {
        return ['value'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {       
        if(attr === 'value'){
            console.log(`${this.Id} ${attr} has changed from ${oldValue} to ${newValue}`);
        }       
    }
    //#endregion

    //#region CUSTOM EVENTS
    _onfilterChanged = (event) => {
        const filterchangedEvent = new Event('filter-changed', { bubbles: true, composed: true });
        event.target.dispatchEvent(filterchangedEvent);
    }
    //#endregion

    //#region GETTERS SETTERS
    get Id() {
        if (this.hasAttribute('id')) return this.getAttribute('id');
    }

    get Placeholder() {
        if (this.hasAttribute('placeholder')) return this.getAttribute('placeholder');
    }

    get Value() {
        if (this.hasAttribute('value')) return this.getAttribute('value');
    }

    set Value(newValue){
        if (this.hasAttribute('value')) return this.setAttribute('value', newValue);
    }
    //#endregion
}

customElements.define('app-filter', Filter);