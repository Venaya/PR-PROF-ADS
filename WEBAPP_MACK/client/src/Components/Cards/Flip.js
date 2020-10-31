import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class FlipCard extends HTMLElement{
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
                    background-color: transparent;
                }

                .card-wrapper{  
                    position: relative;
                    cursor: pointer;
                    
                    text-align: center;
                    transition: transform 0.8s;
                    transform-style: preserve-3d; 
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);   
                    border-radius: 5px; 
                    background-image: linear-gradient(to bottom, #2980B9, #FFFFFF, #6DD5FA); 
                }

                .container:hover .card-wrapper{
                    transform: rotateY(180deg);
                }

                .front, .back{           
                    display: flex;
                    flex-direction: column nowrap;

                    align-items: center;
                    justify-content: center;

                    max-width: 20vw;
                    max-height: 30vh;

                    backface-visibility: hidden;
                }

                .back{
                    transform: rotateY(180deg);
                }                 
            </style>

            <div class="container">
                <div class="card-wrapper">
                    <div class="front">
                        <slot name="front"></slot>
                    </div>
                    <div class="back">
                        <slot name="back"></slot>
                    </div>
                </div>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    //#endregion

    //#region WEBCOMPONENT
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }
    //#endregion
}

customElements.define('app-flipcard', FlipCard);