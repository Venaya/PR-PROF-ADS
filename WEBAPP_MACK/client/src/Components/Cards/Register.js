import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class RegisterCard extends HTMLElement{
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
                    box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.4);
                }

                label{
                    font-weight: bold;
                    opacity: 0.7;
                }

                .select{
                    display: flex;
                    flex-flow: column nowrap;
                }

                select{
                    background: #e6e6e6;
                    border-radius: 3px;
                    height: 35px;
                    outline: none;
                    border: none;

                    line-height: 50px;
                    background: #fafafa;
                    box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.3);
                    border-radius: 5px;
                    padding: 0 20px;
                    color: #666;
                    transition: all 0.4s ease;

                    min-width: 10vw;
                }
            </style>

            <div class="container">
                <app-form id="register" action="http://localhost:7777/api/user" method="POST" redirect="login" submit="Cadastrar">
                    <app-rowcontainer title="Dados de Acesso">
                        <app-input id="username" name="username" label="Nome Usuario" placeholder="Nome Usuario" value="" required="true"></app-input>
                        <app-input id="email" name="email" label="E-mail" placeholder="E-mail" value=""></app-input>   
                        <app-input type="password" id="password" name="password" label="Senha" placeholder="Senha" value=""></app-input>
                        <app-input type="password" id="confirmpassword" name="confirmpassword" label="Confirmar Senha" placeholder="Confirmar Senha" value=""></app-input>                        
                        <div class="select">
                            <label for="role">Perfil:</label>     
                            <select id="role" name="role">
                                <option value="EMPLOYER">Contratante</option>
                                <option value="EMPLOYEE">Contratado</option>
                            </select>  
                        </div>                                                                                   
                    </app-rowcontainer>

                    <app-rowcontainer title="Dados Pessoais">
                        <app-input id="name" name="name" label="Nome" value=""></app-input>
                        <app-input id="surname" name="surname" label="Sobrenome" value=""></app-input>
                        <app-input type="date" id="birthday" name="birthday" label="Data Nascimento" value=""></app-input>
                    </app-rowcontainer>

                    <app-rowcontainer title="Endereço">
                        <div class="select">
                            <label for="state">Estado:</label>  
                            <select id="state" name="state">
                                <option value="SP">Sao Paulo</option>
                                <option value="RJ">Rio de Janeiro</option>
                            </select> 
                        </div">
                        <app-input id="city" name="city" label="Cidade" value=""></app-input>
                        <app-input id="zipcode" name="zipcode" label="CEP" value=""></app-input>
                        <app-input id="street" name="street" label="Rua" value=""></app-input>
                        <app-input id="number" name="number" label="Numero" value=""></app-input>
                    </app-rowcontainer>
                </app-form>
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

customElements.define('app-registercard', RegisterCard);