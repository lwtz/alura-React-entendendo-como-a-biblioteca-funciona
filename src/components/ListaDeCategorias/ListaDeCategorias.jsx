import { Component } from "react";
import './style.css'


// ListaDeCategorias é stateless, nao guarda estado
// Só se preocupa em renderizar aquilo que foi passado pelos elementos pai,
// e que recebe aqui pelas PROPS

class ListaDeCategorias extends Component {
    constructor() {
        super();
        this.state = {categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount() {
        this.props.categorias.unsubscribe(this._novasCategorias)
    }


    _novasCategorias(categorias) {
        console.log(categorias)
        this.setState({...this.state, categorias})
    }

    _handleInput(event) {
        if (event.keyCode === 13) {
            let valorCategoria = event.target.value
            this.props.addCategorias(valorCategoria)
        }
    }


    render() {
        return (
            <section className={'lista-categorias'}>
                <ul className={'lista-categorias_lista'}>
                    {this.state.categorias.map((cat, index) => {
                        return (
                            <li
                                key={index}
                                className={'lista-categorias_item'}>{cat}</li>
                        )
                    })}

                </ul>
                <input
                    onKeyUp={this._handleInput.bind(this)}
                    placeholder={'Adicionar categoria'}
                    type="text"
                    className={'lista-categorias_input'} />
            </section>
        )
    }

}

export default ListaDeCategorias
