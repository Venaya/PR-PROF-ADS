import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class LoginForm extends HTMLElement{
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
                    display: flex;
                    flex-flow: column nowrap;
                    border-radius: 10px;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);

                    width: 100%;
                    height: 100%;
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

                .container{                    
                    display: flex;
                    flex-flow: column nowrap;
                    border-radius: 10px;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);

                    width: 100%;
                    height: 100%;
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

            <div class="container">
                <div class="card">
                    <form id="loginform">    
                        <div class="icon">
                            <img src="${this.Image}" />                            
                        </div>
                        <div class="title">
                            <h2>LOGIN</h2>
                            <hr />
                        </div>
                        <div class="content">   
                            <app-inputwrapper id="username" label="Username"><input type="text" maxlength="30" placeholder="Username" required /></app-inputwrapper>
                            <app-inputwrapper id="password" label="Password"><input type="password" placeholder="Password" required /></app-inputwrapper>                                       
                        </div>       
                        <div class="forgot">
                            <span><a href="">Forgot Password?</a></span>
                            <hr />
                        </div>         
                        <div class="submit">
                            <input type="submit" value="Login" >
                        </div>                               
                    </form>
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

customElements.define('app-loginform', LoginForm);