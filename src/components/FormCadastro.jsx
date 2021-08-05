import { Component } from "react";

class FormCadastro extends Component {
    render() {
        return (<form action="">
            <input type="text" placeholder={'Titulo'} />
            <textarea cols="30" rows="10" placeholder={'Digite aqui'} />
            <button>Criar Nota</button>
        </form>)
    }

}

export default FormCadastro
