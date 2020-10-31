import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Button extends HTMLElement {
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
                    flex-flow: row nowrap;

                    align-items: center;
                    justify-content: center;

                    width: 100%;
                    height: 100%;
                }

                input {
                    box-shadow:inset 0px 1px 0px 0px #d9fbbe;
                    background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
                    background-color:#b8e356;
                    border-radius:6px;
                    border:1px solid #83c41a;
                    display:inline-block;
                    cursor:pointer;
                    color:#ffffff;
                    font-family:Arial;
                    font-size:15px;
                    font-weight:bold;
                    padding:10px 30px;
                    text-decoration:none;
                    text-shadow:0px 1px 0px #86ae47;
                    outline: none;
                }

                input:hover {
                    background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
                    background-color:#a5cc52;
                }

                input:active {
                    position:relative;
                    top:1px;
                }          
            </style>

            <div class="container">   
                <input type="button" value="${this.Value}" onclick="${this.ClickEvent}">                            
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

    //#region CUSTOM EVENTS

    //#endregion

    //#region GETTERS SETTERS
    get Value() {
        if (this.hasAttribute('value')) return this.getAttribute('value');
    }

    get Icon(){
        if (this.hasAttribute('icon')) return this.getAttribute('icon');
    }

    get ClickEvent(){
        if (this.hasAttribute('clickevent')) return this.getAttribute('clickevent');
    }
    //#endregion
}

customElements.define('app-button', Button);