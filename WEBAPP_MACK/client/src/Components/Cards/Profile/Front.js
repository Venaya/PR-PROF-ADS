import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class ProfileFront extends HTMLElement {
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
            </style>

            <div className="container">
                <div class="image">                   
                    <img src="${this.Image}"></img>
                </div>
                <div className="title">
                    <h1>${this.Title}</h1>
                </div>
                <div className="subtitle">
                    <h2>${this.Subtitle}</h2>
                </div>           
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    /*
    _fetch = () => {
        return fetchJSON('http://localhost:7070/api/user/panel/data', 'GET').then((data) => {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.shadowRoot.querySelector('h2').innerHTML = data.fullname;
            this.shadowRoot.querySelector('h4').innerHTML = data.job;          
        });
    }
    */
    //#endregion

    //#region FETCH DATA

    //#endregion

    //#region WEBCOMPONENTS FUNCTIONS
    connectedCallback() {    
        this.shadowRoot.appendChild(template.content.cloneNode(true));       
        this._render();           
    }
    //#endregion

    //#region GETTER SETTER
    get Image() {
        if (this.hasAttribute('image')) return this.getAttribute('image');
    }

    get Title(){
        if (this.hasAttribute('title')) return this.getAttribute('title');
    }

    get Subtitle(){
        if (this.hasAttribute('subtitle')) return this.getAttribute('subtitle');
    }
    //#endregion
}

customElements.define('app-profilefront', ProfileFront)