import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class AuthForm extends HTMLElement {
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
                    display: flex;
                    flex-flow: column nowrap;

                    width: 100%;
                    height: 100%;
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
                }
            </style>

            <form id="form">
                <div class="content">
                    <slot></slot>
                </div>                  
                <div class="forgot">
                    <span><a href="">Forgot Password?</a></span>
                    <hr />
                </div>    
                <div class="submit">
                    <input type="submit" value="Submit" >
                </div>             
            </form>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }
    /*
    _submit = e => {
        e.preventDefault();

        const formData = new FormData();

        this._extractData(formData);

        submitData("http://localhost:8080/auth/login", "POST", formData)
        .then(() =>
        {
            //alert(result);
            //history.pushState(null, null, '/app');
            //if(result.redirected) window.location.replace("http://localhost:7000/app");  
            window.location.replace("http://localhost:7000/app");            
        })
        .catch(error => alert(error.message));
    }

    _extractData = (formData) => {
        this.Inputs.forEach(i => {
            console.log(i.getAttribute('name') + ": " + i.getAttribute('value'));

            formData.append(i.getAttribute('name'), i.getAttribute('value'))
        });
    }
    */
    //#endregion

    //#region WEBCOMPONENTS METHODS
    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
        this._form = this.shadowRoot.querySelector('form');
        this._form.addEventListener('submit', this._submit);
    }

    disconnectedCallback() {
        this.shadowRoot.removeChild(template.content.cloneNode(true));
        this._form.removeEventListener('submit', this._submit);
    }
    //#endregion

    //#region GETTER SETTER
    get Action() {
        if (this.hasAttribute('action')) return this.getAttribute('action');
    }

    get Method() {
        if (this.hasAttribute('method')) return this.getAttribute('method');
    }

    get Inputs() {
        return this.querySelectorAll('app-input');
    }
    //#endregion
}

customElements.define('app-authform', AuthForm);