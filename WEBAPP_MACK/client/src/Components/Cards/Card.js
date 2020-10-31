import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Card extends HTMLElement{
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

                    max-width: 30vw;
                    max-height: 40vh;

                    background-image: linear-gradient(to bottom, #2980B9, #FFFFFF, #6DD5FA); 
                    box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.5);

                    opacity: 0.7;
                }  
                
                .container:hover{
                    opacity: 1;
                }
            </style>

            <div class="container">
                <slot />
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

customElements.define('app-card', Card);