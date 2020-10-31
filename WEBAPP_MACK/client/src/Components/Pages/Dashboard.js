import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Dashboard extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE
    _template = () => {
        return html`
            <style>
                .container app-router{
                    display: grid;
                    grid-template-areas: 
                    "Aside Header Header"
                    "Aside Nav Nav"
                    "Aside Main Main"
                    "Aside Footer Footer";
                
                    grid-template-columns: 1fr 3fr 3fr;
                    grid-template-rows: 1fr 1fr 6fr 1fr;
                
                    width: 100vw;
                    height: 100vh;
                
                    position: absolute;
                }
                
                app-router > app-header{
                    grid-area: Header;
                    background-color: black;
                }
                
                app-router > app-nav{
                    grid-area: Nav;
                    background-color: blue;
                }
                
                app-router > app-aside{
                    grid-area: Aside;
                }
                
                app-router > app-view{
                    grid-area: Main;
                }
                
                app-router > app-footer{
                    grid-area: Footer;
                    background-color: yellow;
                }
            </style>

            <div class="container">
                <app-router>            
                    <app-header></app-header>
                    <app-nav></app-nav>
                    <app-aside></app-aside> 
                        <app-view component="">                      
                        </app-view> 
                    <app-footer></app-footer>
                </app-router>
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

customElements.define('app-dashboard', Dashboard);