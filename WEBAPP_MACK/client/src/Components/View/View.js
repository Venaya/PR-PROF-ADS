import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class View extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        template.innerHTML = this._template();
    }

    //#region PRIVATE FUNCTIONS
    _template = () => {
        return html`
            <style>
            </style>

            <div class="container">               
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _updateRender = () => {
        const element = document.createElement(this.Component);
        template.innerHTML = element.outerHTML;
        this.shadowRoot.replaceChild(template.content.cloneNode(true), this.shadowRoot.childNodes[0]);
        this._render();       
    }
    //#endregion

    //#region WEBCOMPONENTS FUNCTIONS
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
    }

    static get observedAttributes() {
        return ['component'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if(attr == 'component') {
            if(oldValue === newValue) {console.log('Same Render'); return;}
            console.log(`${attr} changed from ${oldValue} to ${newValue}`);
            this._updateRender();
        }
    }
    //#endregion

    //#region GETTER SETTER
    get Component(){
        if(this.hasAttribute('component')) return this.getAttribute('component');
    }
    //#endregion
}

customElements.define('app-view', View);