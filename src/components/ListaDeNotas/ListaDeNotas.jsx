import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";


class ListaDeNotas extends Component {

    // Nao precisa do construtor pq nao vai passar nenhum paramentro pra outro lugar
    // Por de baixo dos panos, o JS declara esse constructor "vazio".
    // Ai ja ta usando uma prop la em baixo
    //
    // constructor(props) {
    //     super(props)
    //
    // }


    render() {
        return (
            <ul className="lista-notas">
                {this.props.notasList.map((nota, index) => {
                    return (

                        <li className="lista-notas_item" key={index}>

                            <CardNota title={nota.title} text={nota.text} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;
