import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class ServiceBack extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });  
        template.innerHTML = this._template();
    }

    //#region PRIVATE FUNCTIONS
    _template = () => {
        return html`
            <style>
                .container{
                    padding-top: 10px;
                    padding-bottom: 5px;
                    background-image: linear-gradient(to bottom right, #0052D4, #9CECFB, #65C7F7);
                    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);                
                }    
                
                img{
                    height: 100px;
                    width: 100px; 
                    object-fit: contain;              

                    border: 5px solid white;
                    border-radius: 50%;
                    opacity: 0.7;
                    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.3);
                }

                .content{
                    display: flex;
                    flex-flow: row nowrap;

                    align-items: center;
                    justify-content: center;
                }
            </style>

            <div class="container">
                <div class="description">
                    <input type="textarea" value="">
                </div>
                <div class="content">  
                    <app-button value="Contratar" clickevent=${this._handleHireClick}></app-button>                      
                </div>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _handleHireClick = (e) => {
        e.preventDefault();
        console.log('Clicked Hire');
    }
    //#endregion

    //#region WEBCOMPONENTS FUNCTIONS
    connectedCallback() { 
        this.shadowRoot.appendChild(template.content.cloneNode(true));          
        this._render();           
    }
    //#endregion

    //#region GETTER SETTER
    get Title() {
        if (this.hasAttribute('title')) return this.getAttribute('title');
    }
    //#endregion
}

customElements.define('app-serviceback', ServiceBack)