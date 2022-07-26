import React, { Component } from 'react';
import './App.css'

let estados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas", "Bahia",
    "Ceará",
    "Distrito Federal ",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí ",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
]

class Dorms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }

    handleUpperkase = ({ target }) => {
        target.value = target.value.toUpperCase()
    }

    handleEnder({ target }) {
        target.value = target.value.replace(/[^a-zA-Z0-9 ]/g, "");
    }

    handleSyty = ({ target }) => {
        let type = parseInt(target.value.charAt(0))
        if (isNaN(type)) type = target.value.charAt(0)
        if (typeof type === 'number') target.value = ''
    }
    render() {
        return (
            <div className='dorm'>
                <form>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <label htmlFor='name'> Nome: </label>
                        <input
                            type="text"
                            name="name"
                            maxLength={40}
                            id="name"
                            onInput={this.handleUpperkase}
                        />
                        <label htmlFor='email'> E-mail: </label>
                        <input
                            type="email"
                            name="email"
                            maxLength={50}
                            id="email"
                        />
                        <label htmlFor='pf'> CPF: </label>
                        <input
                            type="text"
                            name="cpf"
                            maxLength={11}
                            id='pf'
                        />
                        <br />
                        <label htmlFor='ender'> Endereço: </label>
                        <input
                            type="text"
                            name='endereço'
                            maxLength={200}
                            onInput={this.handleEnder}
                            id="ender"
                        />
                        <label htmlFor='syty'> Cidade: </label>
                        <input
                            type="text"
                            name="syty"
                            maxLength={28}
                            onBlur={this.handleSyty}
                        />
                        <label htmlFor='estado'> Estado: </label>
                        <select id='estado'>
                            {estados.map((e, a) => (
                                <option key={a}>{e}</option>
                            ))}
                        </select>
                        <label>Tipo de Moradia
                            <input
                                name='morada'
                                type="radio"
                            />Casa
                            <input
                                name='morada'
                                type="radio"
                            />Apartamento
                        </label>
                    </fieldset>
                </form>
                <form>
                    <fieldset>
                        <legend>Ultimo Emprego</legend>
                        <label htmlFor='text'> Resumo do curriculo:</label>
                        <br />
                        <textarea id='text' maxLength={1000} />
                        <br />
                        <label htmlFor='kargo'>Cargo</label>
                        <input id='kargo' maxLength={40} />
                        <br />
                        <label htmlFor='des'>Descrição do Cargo</label>
                        <br />
                        <textarea id="des" maxLength={400} />
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Dorms;