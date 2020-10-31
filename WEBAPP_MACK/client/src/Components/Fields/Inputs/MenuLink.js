import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class MenuLink extends HTMLElement {
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
                    justify-content: center;
                    align-items: center;
                }

                .container:hover{
                    box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.8);
                    border-left: 5px solid #6DD5FA;
                    cursor: pointer;
                }  
                
                .container:hover h3{
                    opacity: 1;
                }

                h3{
                    font-weight: bold;
                    color: black;
                    opacity: 0.7;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: inherit;
                }
            </style>

            <div class="container">    
                <app-link path="${this.Path}" component="${this.Component}">
                    <h3>${this.Name}</h3>
                </app-link>                      
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
    get Name() {
        if (this.hasAttribute('name')) return this.getAttribute('name');
    }

    get Path() {
        if (this.hasAttribute('path')) return this.getAttribute('path');
    }

    get Component(){
        if (this.hasAttribute('component')) return this.getAttribute('component');
    }

    get Icon() {
        if (this.hasAttribute('icon')) return this.getAttribute('icon');
    }
    //#endregion
}

customElements.define('app-menulink', MenuLink);