import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Aside extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE FUNCTIONS
    _template = () => {
        return html`
            <style>
                .container{
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: strech;
                    align-content: space-between; 
                    text-align: center;
                    height: 100%;   
                    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3);
                }
            </style>

            <div class="container">
                <div class="logo">
                    <img src="" alt="" />
                </div>
                <div class="profile">
                    <app-profilecard></app-profilecard>
                </div>
                <div class="menus">
                    <app-menu></app-menu>
                </div>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    //#endregion

    //#region WEBCOMPONENTS FUNCTIONS
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }
    //#endregion
}

customElements.define('app-aside', Aside);