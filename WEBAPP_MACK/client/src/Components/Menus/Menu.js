import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Menu extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE
    _template = () => {
        return html`
            <style>
                .container{
                    display: flex;
                    flex-flow: column nowrap;

                    justify-content: center;

                    width: 100%;
                    height: 100%;
                }
            </style>

            <div class="container">
                <app-menulink name="Services" path="service" component="app-servicemenu"></app-menulink>
                <app-menulink name="Survey" path="survey" component="app-surveymenu"></app-menulink>
                <app-menulink name="Report" path="report" component="app-reportmenu"></app-menulink>
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

customElements.define('app-menu', Menu);