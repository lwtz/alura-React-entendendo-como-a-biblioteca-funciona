// import logo from './logo.svg';
import './assets/App.css';
/*
Por padrão o arquivo index.js é arquivo padrão de dentro de uma pasta.
Então quando vai importar, por exemplo o ListNotes, nao precisa passar o caminho completo.
Ele vai buscar o Index.js que esta configurado somente para importar e exportar aquele componente
 */
import ListNotes from "./components/List-notes";
import FormCadastro from "./components/Fom-cadastro";
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
