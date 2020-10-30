import {html, render} from 'lit-html';

const template = document.createElement('template');

class ReportMenu extends HTMLElement{
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
                <div class="title">
                    <app-button value="Novo"></app-button>
                </div>
                <div class="table">
                    <p>Report</p>
                </div>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _menus = () => {
        return `
            
        `;
    }

    _fetch = () => {

    }
    //#endregion

    //#region WEBCOMPONENTS
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }
    //#endregion
}

customElements.define('app-reportmenu', ReportMenu);