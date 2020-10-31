import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Login extends HTMLElement{
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
                    text-transform: uppercase;
                    align-item: left;
                }

                hr{
                    width: 10vw;                     
                }

                .content{
                    padding-top: 10px; 
                }

                .content-item{
                    display: flex;
                    flex-flow: column nowrap;

                    width: 100%;
                }

                label{
                    text-transform: uppercase;
                    font-weight: bold;
                }

                input{
                    box-shadow: inset 0px 8px 8px 0px rgba(0,0,0,0.2);
                }
            </style>

            <div class="container">
                <div class="title">
                    <h2>Here goes the app Title</h2>
                </div>
                <div class="content">
                    <app-loginform></app-loginform>
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

customElements.define('app-login', Login);