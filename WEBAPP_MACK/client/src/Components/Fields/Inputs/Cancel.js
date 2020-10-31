import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Cancel extends HTMLElement {
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
                    flex-flow: row nowrap;

                    align-items: center;
                    justify-content: center;

                    width: 100%;
                    height: 100%;
                }

                button {
                    box-shadow:inset 0px 1px 0px 0px #d9fbbe;
                    background:linear-gradient(to bottom, #E44236, #B83227);
                    background-color:#b8e356;
                    border-radius:6px;
                    border:1px solid #AE1438;
                    display:inline-block;
                    cursor:pointer;
                    color:#ffffff;
                    font-family:Arial;
                    font-weight:bold;
                    text-decoration:none;
                    text-shadow:0px 1px 0px #86ae47;
                    outline: none;
                }

                button:hover {
                    background:linear-gradient(to bottom, #B83227, #E44236);
                    background-color:#a5cc52;
                }

                button:active {
                    position:relative;
                    top:1px;
                }  

                span{
                    font-size: 30px;
                }

                .btn{
                    display: flex;
                    flex-flow: row nowrap;

                    justify-content: center;
                    align-items: center;

                    width: 100%;
                    height: 100%;
                }

                span{
                    border-right: 2px solid white;
                    padding-right: 7px;
                }

                p{
                    padding-left: 7px;
                }
            </style>

            <div class="container">                  
                <button onclick="${this._back}">  
                    <div class="btn">
                        <span>
                            &#10006;
                        </span>
                        <p>
                            Cancelar
                        </p> 
                    </div>                 
                </button>                          
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _back = () => {
        history.go(-1);
    }
    //#endregion

    //#region WEB COMPONENT FUNCTIONS
    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
        /*
        this.addEventListener('click', () => {
            history.go(-1);
        });
        */
    }
    //#endregion
}

customElements.define('app-cancel', Cancel);