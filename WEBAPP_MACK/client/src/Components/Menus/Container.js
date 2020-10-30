import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class MenuContainer extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE
    _template = () => {
        return html`
            <style>
                .search{
                    display: flex;
                    flex-flow: row nowrap;

                    align-items: center;
                    justify-content: left;

                    width: 100%;
                    height: 100%;
                }

                .title{
                    display: flex;
                    flex-flow: column nowrap;
                    
                    align-items: center;
                    justify-content: center;

                    width: 100%;
                    height: 100%;

                    text-transform: uppercase;
                }

                hr{
                    width: 60%;
                }
            </style>

            <div class="container">
                <div class="search">
                    <app-cancel></app-cancel>
                    <app-back></app-back>
                    <app-add></app-add>
                </div>
                <div class="title">
                    <hr />
                    <h2>${this.Title}</h2>
                    <hr />
                </div>
                <div class="content">
                    <slot />
                </div>
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
        /*
        this.addEventListener('filter-changed', () => {
            console.log('Hearing filter changing');
            console.log("FILTER: " + document.querySelector('app-filter'));
        });
        */
    }
    //#endregion

    //#region GETTER SETTER
    get Icon(){
        if(this.hasAttribute('icon')) return this.getAttribute('icon');
    }

    get Title(){
        if(this.hasAttribute('title')) return this.getAttribute('title');
    }

    get Filter(){
        return this.shadowRoot.querySelector('#filter');
    }
    //#endregion
}

customElements.define('app-menucontainer', MenuContainer);