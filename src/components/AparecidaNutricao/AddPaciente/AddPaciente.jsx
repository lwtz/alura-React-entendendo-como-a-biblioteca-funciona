import { Component } from "react";
import './style.css'

class AddPaciente extends Component {
    constructor(props) {
        super(props);

        this.nome = {value: ''}
        this.peso = {value: ''}
        this.altura = {value: ''}
        this.gordura = {value: ''}
        this.imc = {value: ''}
    }


    _handlerNome(event) {
        event.stopPropagation()
        this.nome = event.target.value
        console.log(this.nome)
    }

    _handlerPeso(event) {
        event.stopPropagation()
        this.peso = event.target.value
        console.log(this.peso)
    }

    _handlerALtura(event) {
        event.stopPropagation()
        this.altura = event.target.value
        console.log(this.altura)
    }

    _handlerGordura(event) {
        event.stopPropagation()
        this.gordura = event.target.value
        console.log(this.gordura)
    }

    _handlerIMC(event) {
        event.stopPropagation()
        this.imc = event.target.value
        console.log(this.imc)
    }

    CreateUser(event) {
        event.preventDefault()
        event.stopPropagation()
        console.log(this.props)
        console.log(this.props.listaDePacientes)
        this.props.listaDePacientes(this.nome, this.peso, this.altura, this.gordura, this.imc)
    }

    render() {
        console.log('Add paciente')
        return (

            <form

                id='formAdd'
                onSubmit={this.CreateUser.bind(this)}
            >
                <div className="grupo">
                    <label htmlFor={"nome"}>Nome</label>
                    <input
                        type="text"
                        placeholder="Nome do paciente"
                        className="form-cadastro_inputName"
                        onChange={this._handlerNome.bind(this)}
                    />
                </div>

                <div className="grupo">
                    <label htmlFor="{'peso'}">Peso</label>
                    <input
                        type="text"
                        placeholder="Digite o peso do paciente"
                        className="form-cadastro_inputPeso"
                        onChange={this._handlerPeso.bind(this)}

                    />
                </div>

                <div className="grupo">
                    <label htmlFor={"altura"}>Altura</label>
                    <input
                        type="text"
                        placeholder="Altura do paciente"
                        className="form-cadastro_inputHeight"
                        onChange={this._handlerALtura.bind(this)}

                    />

                </div>

                <div className="grupo">
                    <label htmlFor={"gordura"}>% de gordura</label>
                    <input
                        type="text"
                        placeholder="% de gordura do paciente"
                        className="form-cadastro_inputFat"
                        onChange={this._handlerGordura.bind(this)}

                    />
                </div>

                <div className="grupo">
                    <label htmlFor={"imc"}>imc</label>
                    <input
                        type="text"
                        placeholder="% de gordura do paciente"
                        className="form-cadastro_inputimc"
                        onChange={this._handlerIMC.bind(this)}

                    />
                </div>

                <button className="form-cadastro_input form-cadastro_submit">
                    Cadastrar
                </button>
            </form>
        );
    }
}

export default AddPaciente
