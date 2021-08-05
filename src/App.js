import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notas: []
        }
    }

    criarNota(title, text) {
        const newNote = {title, text}
        const newArrayNotes = [...this.state.notas, newNote]
        const newState = {
            notas: newArrayNotes
        }
        this.setState(newState)
    }


    render() {
        return (
            <section className="conteudo">
                {/*  esse criarNota={} é uma propriedade que o formulário vai ter, que foi definida lá no FormularioCadastro.jsx */}
                {/*  {this.criarNota} é uma injection of dependency  */}
                <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                <ListaDeNotas notasList={this.state.notas} />
            </section>
        )
    }
}

export default App;
