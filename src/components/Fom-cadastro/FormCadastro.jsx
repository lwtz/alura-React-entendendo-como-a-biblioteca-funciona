import { Component } from "react";

class FormCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder={'Titulo'} className='form-cadastro_input' />
                <textarea cols={30} rows={15} placeholder={'Escreva sua nota'} />
                <button>Criar Nota</button>
            </form>
        )
    }

}

export default FormCadastro
