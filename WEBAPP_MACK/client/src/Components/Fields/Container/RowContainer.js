import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class RowContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this._template();
    }

    //#region PRIVATE FUNCTIONS
    _template = () => {
        return html`
            <style>
                .container{
                    display: flex;
                    flex-flow: column wrap;
                    
                    align-items: left;
                    justify-content: center;
                }       

                .line{
                    width: 40%;
                }

                .content{
                    display: flex;
                    flex-flow: row wrap;

                    align-items: center;
                    justify-content: center;
                }
            </style>

            <div class="container">    
                <div class="title">
                    <h2>${this.Title}</h2>                    
                </div>
                <div class="line">
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

    //#region WEB COMPONENT FUNCTIONS
    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }

    static get observedAttributes() {
        return ['value'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        console.log(`${this.Id} ${attr} has changed from ${oldValue} to ${newValue}`);      
    }
    //#endregion

    //#region GETTER SETTER
    get Title(){
        if(this.hasAttribute('title')) return this.getAttribute('title');
    }
    //#endregion
}

customElements.define('app-rowcontainer', RowContainer);