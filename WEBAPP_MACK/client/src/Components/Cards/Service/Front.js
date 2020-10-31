import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class ServiceFront extends HTMLElement {
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

                .score{
                    display: flex;
                    flex-flow: row nowrap;
                }

                .scored {
                    color: yellow;
                }
            </style>

            <div className="container">
                <div class="title">
                    <h1>${this.Title}</h1>
                </div>
                <div>
                    <hr />
                </div>
                <div class="fullname">
                    <h2>${this.FullName}</h2>
                </div>   
                <div class="score">
                    <span id="1" class="scored">☆</span>
                    <span id="2">☆</span>
                    <span id="3">☆</span>
                    <span id="4">☆</span>
                    <span id="5">☆</span>
                </div>          
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _setScore = () => {
        if(this.Score <= 0) return;
        
    }
    //#endregion

    //#region FETCH DATA

    //#endregion

    //#region WEBCOMPONENTS FUNCTIONS
    connectedCallback() {   
        this.shadowRoot.appendChild(template.content.cloneNode(true));        
        this._render(); 
        console.log(this.shadowRoot.querySelectorAll('span'));          
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

    get Score(){
        if (this.hasAttribute('score')) return this.getAttribute('score');
    }
    //#endregion
}

customElements.define('app-servicefront', ServiceFront)