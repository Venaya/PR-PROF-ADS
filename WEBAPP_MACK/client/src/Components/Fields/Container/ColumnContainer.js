import {html, render} from 'lit-html';

const template = document.createElement('template');

class ColumnContainer extends HTMLElement {
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
                    flex-flow: column nowrap;
                    
                    align-items: left;
                    justify-content: center;
                    align-content: space-evenly;

                    width: 90%;
                    height: 100%;
                }       

                .line{
                    width: 40%;
                }

                .content{
                    display: flex;
                    flex-flow: column wrap;

                    align-items: center;
                    justify-content: center;

                    width: 100%;
                    height: 100%;
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

customElements.define('app-columncontainer', ColumnContainer);