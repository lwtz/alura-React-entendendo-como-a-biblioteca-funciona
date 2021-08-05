import { Component } from "react";
import './style.css'

class AddPaciente extends Component {
    render() {
        console.log('Add paciente')
        return (
            <form action="" id='formAdd'>
                <div className="grupo">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id={'name'}
                        // class={'name'}
                        placeholder="Nome do paciente"
                        className="form-cadastro_inputName"
                        /* O This dps do bind representa a referencia para o próprio objeto/método*/
                    />
                </div>

                <div className="grupo">
                    <label htmlFor="name">Peso</label>
                    <input
                        type="number"
                        id={'peso'}
                        // class={'peso'}
                        placeholder="Digite o peso do paciente"
                        className="form-cadastro_inputPeso"
                        /* O This dps do bind representa a referencia para o próprio objeto/método*/
                    />
                </div>

                <div className="grupo">
                    <label htmlFor="name">Altura</label>
                    <input
                        type="number"
                        id={'height'}
                        // class={'heigth'}
                        placeholder="Altura do paciente"
                        className="form-cadastro_inputHeight"
                        /* O This dps do bind representa a referencia para o próprio objeto/método*/
                    />

                </div>

                <div className="grupo">
                    <label htmlFor="name">% de gordura</label>
                    <input
                        type="number"
                        id={'fat'}
                        // class={'fat'}
                        placeholder="% de gordura do paciente"
                        className="form-cadastro_inputFat"
                        /* O This dps do bind representa a referencia para o próprio objeto/método*/
                    />
                </div>


                <button className="form-cadastro_input form-cadastro_submit">
                    Cadastrar
                </button>
            </form>


        )
    }
}

export default AddPaciente
