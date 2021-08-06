import React, { Component } from "react";
// import ListaDeNotas from "./components/ListaDeNotas";
// import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import './assets/styleNutricao.css';


// Imports da aparecida nutricao
import TabelaPacientes from "./components/AparecidaNutricao/Tabela/TabelaPacientes";
import AddPaciente from "./components/AparecidaNutricao/AddPaciente/AddPaciente"


class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         notas: []
    //     }
    // }
    //
    // criarNota(title, text) {
    //     const newNote = {title, text}
    //     const newArrayNotes = [...this.state.notas, newNote]
    //     const newState = {
    //         notas: newArrayNotes
    //     }
    //     this.setState(newState)
    // }
    //
    //
    // render() {
    //     return (
    //         <section className="conteudo">
    //             {/*  esse criarNota={} é uma propriedade que o formulário vai ter, que foi definida lá no FormularioCadastro.jsx */}
    //             {/*  {this.criarNota} é uma injection of dependency  */}
    //             <FormularioCadastro criarNota={this.criarNota.bind(this)} />
    //             <ListaDeNotas notasList={this.state.notas} />
    //         </section>
    //     )
    // }

//  Tentar implementar  Aparecida nutricão
    constructor(props) {
        super(props);

        this.state = {
            pacientes: []
        }

    }

    criarPaciente(nome, peso, altura, gordura, imc) {
        const newPaciente = {nome, peso, altura, gordura, imc}
        const newArrayPaciente = [...this.state.pacientes, newPaciente]
        const newState = {
            pacientes: newArrayPaciente
        }
        this.setState(newState)
    }


    render() {
        return (
            <section>
                <h1 className={'h1'}> Adicionar novo paciente </h1>
                <hr />
                <AddPaciente criarPaciente={this.criarPaciente.bind(this)} />
                <TabelaPacientes listaDePacientes={this.state.pacientes} />
            </section>
        )
    }


}

export default App;
