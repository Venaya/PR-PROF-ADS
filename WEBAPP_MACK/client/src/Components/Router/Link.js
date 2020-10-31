import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Link extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE
    _template = () => {
        return html`
            <style>
                a{
                    text-decoration: none;
                    color: black;
                }
            </style>

            <div class="container">
                <a href=""><slot /></a>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _click = (e) =>{ 
        e.preventDefault();
        
        const state = {
            component: this.Component,
            path: "/" + this.Path
        }
        
        console.log('Link Set State: ' + state.component + " , " + state.path);

        if(window.location.href === window.location.origin + state.path){
            console.log('same URL');
            return;
        }
    
        history.pushState(state, null, state.path);

        //trigger location change
        this._onlocationchangedEvent(e);
    }
    //#endregion

    //#region WEBCOMPONENTS
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.addEventListener('click', this._click);
        this._render();
    }
    //#endregion

    //#region GETTER SETTER
    get Path(){
        if(this.hasAttribute('path')) return this.getAttribute('path');
    }

    get Component(){
        if(this.hasAttribute('component')) return this.getAttribute('component');
    }
    //#endregion

    //#region EVENTS
    _onlocationchangedEvent = event => {
        const locationchangedEvent = new Event('location-changed', { bubbles: true, composed: true });
        event.target.dispatchEvent(locationchangedEvent);
    }
    //#endregion
}

customElements.define('app-link', Link);