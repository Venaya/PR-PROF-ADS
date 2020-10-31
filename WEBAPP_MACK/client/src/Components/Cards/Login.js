import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class LoginCard extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE
    _template = () => {
        return html`
            <style>
                img{                   
                    object-fit: contain;
                    border-radius: 10px;
                    border: 5px solid white;
                    box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
                    
                    width: 95%;
                    min-height: 15vh;
                }

                hr{
                    width: 75%;
                }

                app-input{
                    padding-top: 10px;
                }

                .card{
                    width: 90%;
                }

                .icon{
                    padding-top: 10px;
                }

                .title{
                    align-items: center;
                }
            </style>

            <div class="container">
                <div class="card">
                    <app-form id="loginform" action="http://localhost:7777/api/login" method="POST" redirect="" submit="Login">    
                        <div class="icon">
                            <img src="${this.Image}" />                            
                        </div>
                        <div class="title">
                            <h2>${this.Title}</h2>
                            <hr />
                        </div>
                        <div class="content">
                            <app-inputwrapper id="login" label="Username"><input type="text" id="login" minlength="5" maxlength="30" required /></app-inputwrapper>
                            <app-inputwrapper id="username" label="Username"><input type="text" placeholder="Username" required /></app-inputwrapper>                                       
                        </div>                               
                    </app-form>
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

customElements.define('app-logincard', LoginCard);