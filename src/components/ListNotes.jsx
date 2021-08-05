import { Component } from 'react'
import CardNotes from "./CardNotes";

class ListNotes extends Component {
    render() {
        return (
            <ul>
                <li>
                    <CardNotes />
                </li>
                <li>
                    <CardNotes />
                </li>
            </ul>
        )
    }
}

export default ListNotes
