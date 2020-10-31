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
            </style>
            <div class="container">
                <form id="services">
                    <div class="form">                    
                        <app-rowcontainer title="Dados de Acesso">                         
                            <app-inputwrapper label="Perfil">    
                                <select id="role" name="role">
                                    <option value="EMPLOYER">Contratante</option>
                                    <option value="EMPLOYEE">Contratado</option>
                                </select>  
                            </app-inputwrapper>                                                                                 
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

    _load = () => {

    }

    _save = () => {
        
    }

    _fetch = () => {      
        this._submitData(`${process.env.URL}` + '/api/user', 'GET')
        .then((response) =>
        {           
            if(!response.ok) throw new Error(response.statusText);   
            return response.json();      
        })
        .then(() => {
            alert('Cadastro realizado com sucesso');
        })
        .then(() => {
  
        })
        .catch(error => alert(error.message));
    }

    _fetchData = async (url, method) => {
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