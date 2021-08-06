import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as CheckSVG} from '../../assets/img/Check.svg'

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        // this.titulo = ''
        this.title = {value: ''}
        this.text = {value: ''}
    }

    _handlerAlterTitle(event) {
        event.stopPropagation()

        this.title = event.target.value
    }

    _handlerTextArea(event) {
        event.stopPropagation()
        this.text = event.target.value
    }

    _criarNota(event) {
        event.preventDefault()
        event.stopPropagation()

        this.props.criarNota(this.title, this.text)
    }

    render() {
        return (
            <form className="form-cadastro "
                  onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    /* O This dps do bind representa a referencia para o próprio objeto/método*/
                    onChange={this._handlerAlterTitle.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handlerTextArea.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    <CheckSVG />
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
