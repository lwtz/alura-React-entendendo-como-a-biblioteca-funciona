import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";


class ListaDeNotas extends Component {

    constructor(props) {
        super(props);
        this.state = {notas: []}
        this._novasNotas = this._novasNotas.bind(this)
    }

    componentDidMount() {
        this.props.notas.inscrever()
    }


    componentWillUnmount() {
        this.props.notas.unsubscribe(this._novasNotas)

    }

    _novasNotas(notas) {
        this.setState({...this.state, notas})
    }


    render() {
        return (
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                e={index}
                                apagarNota={this.state.apagarNota}
                                title={nota.title} text={nota.text}
                                categoria={nota.categoria}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;
