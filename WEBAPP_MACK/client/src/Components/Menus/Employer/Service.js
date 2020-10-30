import {html, render} from 'lit-html';

const template = document.createElement('template');
const Services = 
    ["Manutençao Caixa",
    "Forro Metal",
    "Soldagem Artesanal"];
class ServiceMenu extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE
    _template = () => {
        return html`
            <style>
                .data-table{
                    overflow: auto;
                }
            </style>

            <div class="container">
                <app-menucontainer title="Serviços">
                    <app-servicecard fullname="JOHN DOE" service="Manuntençao Caixa" items="${Services}"></app-servicecard>
                </app-menucontainer>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _menus = () => {
        return `
            <app->
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

customElements.define('app-servicemenu', ServiceMenu);