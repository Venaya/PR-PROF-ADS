import {html, render} from '../../../node_modules/lit-html/lit-html.js';

const template = document.createElement('template');

class RegisterForm extends HTMLElement{
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

                    width: 90%;
                    height: 100%; 
                    
                    box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.4);
                }
            </style>
            <div class="container">
                <form id="register">
                    <div class="form">                    
                        <app-rowcontainer title="Dados de Acesso">
                            <app-inputwrapper label="Username"><input type="text" name="username" maxlength="30" placeholder="Username" required /></app-inputwrapper>
                            <app-inputwrapper label="Email"><input type="text" name="email" maxlength="30" placeholder="E-mail" required /></app-inputwrapper>
                            <app-inputwrapper label="Password"><input type="password" id="password" name="password" maxlength="30" placeholder="Password" required /></app-inputwrapper>
                            <app-inputwrapper label="Confirm Password"><input type="password" id="confirmpassword" maxlength="30" placeholder="Confirm Password" required /></app-inputwrapper>
                            <app-inputwrapper label="Perfil">    
                                <select id="role" name="role">
                                    <option value="EMPLOYER">Contratante</option>
                                    <option value="EMPLOYEE">Contratado</option>
                                </select>  
                            </app-inputwrapper>                                                                                 
                        </app-rowcontainer>

                        <app-rowcontainer title="Dados Pessoais">
                            <app-inputwrapper label="Nome"><input type="text" name="name" maxlength="30" placeholder="Nome" required /></app-inputwrapper>
                            <app-inputwrapper label="Sobrenome"><input type="text" name="surname" maxlength="30" placeholder="Sobrenome" required /></app-inputwrapper>
                            <app-inputwrapper label="Data Aniversario"><input type="date" name="birthday" placeholder="Data Aniversario" /></app-inputwrapper>
                        </app-rowcontainer>

                        <app-rowcontainer title="Endereço">
                            <app-inputwrapper label="Estado"> 
                                <select id="state" name="state">
                                    <option value="SP">Sao Paulo</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                </select> 
                            </app-inputwrapper>
                            <app-inputwrapper label="Cidade"><input type="text" name="city" placeholder="Cidade" /></app-inputwrapper>
                            <app-inputwrapper label="CEP"><input type="text" name="zipcode" placeholder="CEP" /></app-inputwrapper>
                            <app-inputwrapper label="Rua"><input type="text" name="street" placeholder="Rua" /></app-inputwrapper>
                            <app-inputwrapper label="Numero"><input type="text" name="number" placeholder="Numero" /></app-inputwrapper>
                        </app-rowcontainer>                   
                    </div>
                    <div class="line">
                        <hr />
                    </div>
                    <div class="submit">
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </div>
        `;
    }

    _render = () => {
        render(this._template(), this.shadowRoot);
    }

    _submit = e => {
        e.preventDefault();
      
        const password = this.shadowRoot.querySelector('#password').value;
        const confirmpassword = this.shadowRoot.querySelector('#confirmpassword').value;

        console.log(password != confirmpassword);

        if(password != confirmpassword) {
            alert('Senhas nao coincidem');
            return;
        }

        const form = this.shadowRoot.querySelector('form');

        const formData = new FormData(form);

        console.log(JSON.stringify(Object.fromEntries(formData)));

        this._submitData(`${process.env.URL}` + '/api/user', 'POST', formData)
        .then((response) =>
        {           
            if(!response.ok) throw new Error(response.statusText);   
            return response.json();      
        })
        .then(() => {
            alert('Cadastro realizado com sucesso');
        })
        .then(() => {
            window.location.replace(`${process.env.LOCAL}` + '/login');
        })
        .catch(error => alert(error.message));
    }

    _submitData = async (url, method, data) => {
        try {
            const headers = new Headers({
                'Content-Type': 'application/json',
                'Origin': process.env.LOCAL
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

    //#region WEBCOMPONENTS
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._render();
        this._form = this.shadowRoot.querySelector('form');
        this._form.addEventListener('submit', this._submit);
    }
    //#endregion
}

customElements.define('app-registerform', RegisterForm);