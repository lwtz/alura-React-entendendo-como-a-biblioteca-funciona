import React, { Component } from "react";
import "./estilo.css";
// import { ReactComponent as SVGdelete } from '../../assets/img/SVGdelete.svg';
import { ReactComponent as SVGDelete } from '../../assets/img/SVGdelete.svg';


class CardNota extends Component {
    // constructor(props) {
    //     super(props);
    // }




    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.title}</h3>
                    <SVGDelete  onClick={this.props.apagarNota}/>
                </header>
                <p className="card-nota_texto">{this.props.text}</p>
            </section>
        );
    }
}

export default CardNota;
