import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Modal extends HTMLElement{
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

                    position: absolute;
                    width: 10vw;
                    height: 10vh;

                    box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.4);
                }

                .modal{
                    display: flex;
                    flex-flow: column nowrap;

                    align-items: center;
                    justify-content: center;

                    width: 100%;
                    height: 100%;
                }

                .close{
                    float: right;
                    position: relative;
                }

                .close:hover{
                    cursor: pointer;
                }

                h2{
                    position: relative;
                }
            </style>

            <div class="container">
                <div class="modal">
                    <div class="header">
                        <span class="close">&times;</span>
                        <h2>${this.Title}</h2>                       
                    </div>
                    <div class="content">
                        <slot></slot>
                    </div>
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
        /*
        this.shadowRoot.querySelector('.close').addEventListener('click', () => {
            console.log('clicked');
        });
        */
        this._render();
    }
    //#endregion

    //#region Getter Setter
    get Title(){
        if(this.hasAttribute('title')) return this.getAttribute('title');
    }
    //#endregion
}

customElements.define('app-modal', Modal);