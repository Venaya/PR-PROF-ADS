import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class ServiceCard extends HTMLElement {
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
                    display: flex;
                    flex-flow: column nowrap;

                    align-items: center;


                    max-width: 15vw;
                    max-height: 50vh;

                    min-width: 10vw;
                    min-height: 40vh;

                    background-image: linear-gradient(to bottom right, #0052D4, #9CECFB, #65C7F7);
                    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);

                    border-radius: 5px;
                }    
                               
                img{
                    height: 80px;
                    width: 80px; 
                    object-fit: contain;              

                    border: 5px solid white;
                    border-radius: 50%;
                    opacity: 0.7;
                    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.3);
                }

                .line{                    
                    width: 40%;
                }

                hr{
                    color: white;
                }
            </style>

            <div class="container">
                <div class="fullname">
                    <h2>${this.FullName}</h2>
                </div>
                <div class="image">
                    <img src="" />
                </div>
                <div class="line">
                    <hr />
                </div>
                <div class="service">
                    <h3>${this.Service}</h3>
                    <ul id="details"></ul>
                </div>
                <div class="line">
                    <hr />
                </div>
                <div class="button">  
                    <app-button value="Orçamento" clickevent=${this._handleClick}></app-button>                      
                </div>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _handleClick = (e) => {
        e.preventDefault();
        console.log('Clicked Hire');
        //redirect to main
    }

    _loadItems = () => {
        if(this.Items.length <= 0) return;

        this.Items.map(i => {
            this.shadowRoot.querySelector('#details').appendChild(this._renderList(i));
        });
    }

    _renderList = (item) => {
        return `
            <li>${item}</li>
        `;
    }
    //#endregion

    //#region WEBCOMPONENTS FUNCTIONS
    connectedCallback() { 
        this.shadowRoot.appendChild(template.content.cloneNode(true));  
        console.log(this.Items[0]);     
        this._render();           
    }
    //#endregion

    //#region GETTER SETTER
    get FullName() {
        if (this.hasAttribute('fullname')) return this.getAttribute('fullname');
    }

    get Service(){
        if(this.hasAttribute('service')) return this.getAttribute('service');
    }

    get Items() {
        if(this.hasAttribute('items')) return this.getAttribute('items');
    }
    //#endregion
}

customElements.define('app-servicecard', ServiceCard)