import { Component } from "react";
import "./style.css"

class CardNotes extends Component {
    render() {
        return (
            // <section style={{color: "red"}}>
            <section className='card-nota'>
                <header className='card-nota_cabecalho'>
                    <h3 className='card-nota_titulo'>Titulo</h3>
                </header>
                <p className='card-nota_text'>Escreva a nota</p>
            </section>
        );
    }
}

export default CardNotes

