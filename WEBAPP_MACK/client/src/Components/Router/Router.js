class Router extends HTMLElement{
    constructor(){
        super();
    }

    //#region PRIVATE FUNCTIONS
    _updateRender = (e) => {
        e.stopPropagation();

        if(!this.View) {
            console.log('View not Found');
            return;
        }

        const {component} = history.state;

        this.View.setAttribute('component', component);
    }
    //#endregion

    //#region WEBCOMPONENTS FUNCTIONS
    connectedCallback(){
        window.addEventListener('location-changed', this._updateRender);
        window.addEventListener('popstate', this._updateRender);
    }
    //#endregion

    //#region GETTER SETTER
    get View(){
        return document.querySelector('app-view');
    }
    //#endregion

    //#region EVENTS
    onlocationchangedEvent = event => {
        const locationchangedEvent = new Event('location-changed', { bubbles: true, composed: true });
        event.target.dispatchEvent(locationchangedEvent);
    }
    //#endregion
}

customElements.define('app-router', Router);