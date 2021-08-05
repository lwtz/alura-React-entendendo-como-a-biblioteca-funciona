import { Component } from 'react'
import CardNotes from "../CardNota";

class ListNotes extends Component {
    render() {
        return (
            <ul>
                {Array.of('Trabalho', 'Casa', 'Escola').map((cat, index) => {
                    return (
                        <li key={index}>
                            {/*Spread children are not supported in React.  Se for usar os 3 pontos ... nao pode ser no filho*/}
                            <h3> {cat}</h3>
                            <CardNotes />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListNotes
