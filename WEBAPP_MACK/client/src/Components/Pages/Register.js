import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Register extends HTMLElement{
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
                    
                    align-items: center;
                    justify-content: center;

                    width: 100vw;
                    height: 100vh;
                }

                .title{
                    align-text: center;
                }

                .line{
                    padding-bottom: 20px;
                    width: 20%;
                }
            </style>

            <div class="container">
                <div class="title">
                    <h2>REGISTRAR</h2>
                </div>
                <div class="line">
                    <hr />
                </div>
                <div class="content">
                    <app-registerform></app-registerform>
                </div>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    //#endregion

    //#region WEBCOMPONENTS
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }
    //#endregion
}

customElements.define('app-register', Register);