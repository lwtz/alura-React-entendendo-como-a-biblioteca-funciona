import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./Dados/Categorias";
import ArrayDeNotas from "./Dados/ArrayDeNotas";

class App extends Component {
    constructor(props) {
        super(props)
        this.categorias = new Categorias()
        this.notas = new ArrayDeNotas()
    }

    /*


    criarNota(title, text, categoria) {
        const newNote = {title, text, categoria}
        const newArrayNotes = [...this.state.notas, newNote]
        const newState = {
            notas: newArrayNotes
        }
        this.setState(newState)
    }

    _deletarNota(e) {
        let arrayNotas = this.state.notas
        arrayNotas.splice(e, 1)
        this.setState({notas: arrayNotas})
    }

    addCategoria(nomeCategoria) {
        // [ ] é um array. Ai ele pega esse array e insere as categorias
        const newArrayCategorias = [...this.state.categorias, nomeCategoria]
        // { } é um objeto. Ele pega e insere o novo array com as categorias na propriedade categorias dentro desse objeto
        const newState = {...this.state, categorias: newArrayCategorias}

        this.setState(newState)
    }
*/


    render() {
        return (
            <section className="conteudo">
                {/*  esse criarNota={} é uma propriedade que o formulário vai ter, que foi definida lá no FormularioCadastro.jsx */}
                {/*  {this.criarNota} é uma injection of dependency  */}
                <FormularioCadastro
                    categorias={this.categorias}
                    criarNota={this.notas.adicionarNota.bind(this.notas)} />
                <main className={'conteudo-principal'}>
                    <ListaDeCategorias
                        addCategorias={this.categorias.adicionarCategoria.bind(this.categorias)}
                        categorias={this.categorias}
                    />
                    <ListaDeNotas
                        apagarNota={this.notas.apagarNotas.bind(this.notas)}
                        notasList={this.notas}
                    />
                </main>
            </section>
        )
    }
}

export default App;
