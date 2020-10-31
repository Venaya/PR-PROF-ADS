import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class Form extends HTMLElement {
    constructor() {
        super();

        this._form;

        this.attachShadow({ mode: 'open' });
        template.innerHTML = this._template();       
    }

    //#region PRIVATE FUNCTIONS
    _template = () => {
        return html`
            <style>
                form{
                    display: flex;
                    flex-flow: column nowrap;

                    align-items: center;
                    justify-content: center;

                    width: 100%;
                    height: 100%;
                }

                .line{
                    width: 75%;
                }

                input[type=submit] {
                    box-shadow:inset 0px 1px 0px 0px #d9fbbe;
                    background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
                    background-color:#b8e356;
                    border-radius:6px;
                    border:1px solid #83c41a;
                    display:inline-block;
                    cursor:pointer;
                    color:#ffffff;
                    font-family:Arial;
                    font-size:15px;
                    font-weight:bold;
                    padding:10px 30px;
                    text-decoration:none;
                    text-shadow:0px 1px 0px #86ae47;
                    outline: none;
                    width: 100%;
                }

                input[type=submit]:hover {
                    background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
                    background-color:#a5cc52;
                }

                input[type=submit]:active {
                    position:relative;
                }    

                .content{
                    width: 100%;
                }

                .forgot{
                    padding-top: 10px;
                    padding-bottom: 10px;
                    float: right;
                }

                .forgot a{
                    color: black;
                    text-decoration: none;
                    opacity: 0.7;
                }

                .forgot a:hover{
                    opacity: 1;
                }

                .forgot hr{
                    float: right;
                    width: 70%;
                }

                .submit{
                    padding-top: 10px;
                    padding-bottom: 10px;
                    width: 90%;
                }
            </style>

            <form id="${this.ID}">
                <div class="content">
                    <slot />
                </div>  
                <div class="line">
                    <hr />
                </div>                 
                <div class="submit">
                    <input type="submit" value="${this.Submit}" >
                </div>             
            </form>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    
    _submit = e => {
        e.preventDefault();

        console.log(this.Inputs);

        const formData = new FormData();

        this._extractData(formData);

        this._submitData(this.Action, this.Method, formData)
        .then(() =>
        {
            alert('Success'); 
            if(!this.Redirect) return;
            console.log('FORMDATA: ' + formData);
            //window.location.replace('http://localhost:3333/' + this.Redirect);
        })
        .catch(error => alert("Error: " + error.message));
    }

    _extractData = (formData) => {
        this.Inputs.forEach(i => {
            console.log(i.getAttribute('name') + ": " + i.getAttribute('value'));

            formData.append(i.getAttribute('name'), i.getAttribute('value'))
        });
        console.log(formData);
    }  

    _submitData = async (url, method, data) => {
        try {
            const headers = new Headers({
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:3333'
            });

            return await fetch(url, {
                mode: 'cors',
                method: method,
                body: JSON.stringify(Object.fromEntries(data)),
                headers: headers,
                credentials: "include"
            });
        } catch (e) {
            console.error(e.message);
        }
    }
    //#endregion

    //#region WEBCOMPONENTS METHODS
    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
        this._form = this.shadowRoot.querySelector('form');
        this._form.addEventListener('submit', this._submit);
    }
    //#endregion

    //#region GETTER SETTER
    get ID(){
        if (this.hasAttribute('id')) return this.getAttribute('id');
    }

    get Action() {
        if (this.hasAttribute('action')) return this.getAttribute('action');
    }

    get Method() {
        if (this.hasAttribute('method')) return this.getAttribute('method');
    }

    get Inputs() {
        return this.querySelectorAll('app-input');
    }

    get Redirect(){
        if (this.hasAttribute('redirect')) return this.getAttribute('redirect');
    }

    get Submit(){
        if (this.hasAttribute('submit')) return this.getAttribute('submit');
    }
    //#endregion
}

customElements.define('app-form', Form);