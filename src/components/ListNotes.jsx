import { Component } from 'react'

// class ListNotes extends React.Component {
class ListNotes extends Component {
    render() {
        return (
            <ul>
                <li>
                    <section>
                        <header>
                            <h3>Titulo</h3>
                        </header>
                        <p>Escreva a nota</p>
                    </section>
                </li>
                <li>
                    <section>
                        <header>
                            <h3>Titulo</h3>
                        </header>
                        <p>Escreva a nota</p>
                    </section>
                </li>
            </ul>
        )
    }
}

export default ListNotes
