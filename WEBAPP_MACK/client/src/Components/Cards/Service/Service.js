import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class ServiceCard extends HTMLElement{
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
                <app-flipcard>
                    <app-servicefront slot="front" title="${this.Title}" fullname="${this.FullName}" score="${this.Score}"></app-servicefront>
                    <app-serviceback slot="back"></app-serviceback>
                </app-flipcard>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    //#endregion

    //#region WEBCOMPONENT
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }
    //#endregion

    //#region GETTER SETTER
    get Title(){
        if(this.hasAttribute('title')) return this.getAttribute('title');
    }

    get FullName(){
        if(this.hasAttribute('fullname')) return this.getAttribute('fullname');
    }

    get Score(){
        if(this.hasAttribute('score')) return this.getAttribute('score');
    }
    //#endregion
}

customElements.define('app-servicecard', ServiceCard);