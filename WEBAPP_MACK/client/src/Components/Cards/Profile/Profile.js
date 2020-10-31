import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class ProfileCard extends HTMLElement{
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
      
                }              
            </style>

            <div class="container">
                <app-flipcard>
                    <app-profilefront slot="front" title="JANE DOE" subtitle="Developer"></app-profilefront>
                    <app-profileback slot="back" title="Data"></app-profileback>
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
}

customElements.define('app-profilecard', ProfileCard);