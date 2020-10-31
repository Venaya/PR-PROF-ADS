import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class ProfileBack extends HTMLElement {
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

                .content{
                    display: flex;
                    flex-flow: row nowrap;

                    align-items: center;
                    justify-content: center;
                }
            </style>

            <div class="container">
                <div class="title">
                    <h1>${this.Title}</h1>
                </div>
                <div class="data">
                    <h2>${this.Corporate}</h2>
                    <h3>${this.Contact}</h3>
                </div>
                <div class="content">
                    <div class="edit">      
                        <app-button value="Edit" clickevent=${this._handleEditClick}></app-button>                      
                    </div>
                    <div class="logout">                   
                        <app-button Value="Logout" clickevent=${this._handleLogoutClick}></app-button>                 
                    </div>
                </div>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _handleEditClick = (e) => {
        e.preventDefault();
        console.log('Clicked Edit');
    }

    _handleLogoutClick = (e) => {
        e.preventDefault();
        console.log('Clicked Logout');
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

customElements.define('app-profileback', ProfileBack)