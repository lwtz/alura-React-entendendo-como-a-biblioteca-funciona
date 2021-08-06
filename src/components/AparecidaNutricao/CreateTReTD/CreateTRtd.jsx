import { Component } from "react";

class CreateTRtd extends Component {

    render() {
        return (
            <tbody className={'tabela-pacientes'}>
            <tr className={'pacientes'}>
                <td className={'info-nome'}>{this.props.nome}</td>
                <td className={'info-peso'}>{this.props.peso}</td>
                <td className={'info-altura'}>{this.props.altura}</td>
                <td className={'info-gordura'}>{this.props.gordura}</td>
                <td className={'info-imc'}>{this.props.imc}</td>
            </tr>
            </tbody>
        )
    }
}

export default CreateTRtd
