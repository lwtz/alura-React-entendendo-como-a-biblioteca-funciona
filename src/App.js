// import logo from './logo.svg';
import './App.css';
import ListNotes from "./components/ListNotes";

function App() {
    return (

        <section>
            <form action="">
                <input type="text" placeholder={'Titulo'} />
                <textarea cols="30" rows="10" placeholder={'Digite aqui'} />
                <button>Criar Nota</button>
            </form>
            {/* Aqui ele pega o component criado*/}
            <ListNotes />
        </section>
    );
}

export default App;
