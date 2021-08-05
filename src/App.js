// import logo from './logo.svg';
import './App.css';
import ListNotes from "./components/ListNotes";
import FormCadastro from "./components/FormCadastro";
import { Component } from "react";

class App extends Component {
    render() {
        return (
            <section>
                {/* Aqui ele pega o component criado*/}
                <FormCadastro />
                <ListNotes />
            </section>
        );
    }
}

export default App;
