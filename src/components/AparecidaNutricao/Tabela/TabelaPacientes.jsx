import { Component } from "react";
import CreateTRtd from "../CreateTReTD/CreateTRtd";

class TabelaPacientes extends Component {


    render() {
        return (
            <div>

                <table>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Peso(kg)</th>
                        <th>Altura(m)</th>
                        <th>Gordura Corporal(%)</th>
                        <th>IMC</th>
                    </tr>
                    </thead>
                    {this.props.listaDePacientes.map((paciente, index) => {
                        return (
                            <CreateTRtd key={index}
                                        nome={paciente.nome}
                                        peso={paciente.peso}
                                        altura={paciente.altura}
                                        gordura={paciente.gordura}
                                        imc={paciente.imc}
                            />

                        )
                    })}
                    <CreateTRtd />
                </table>
            </div>
        )
    }
}

export default TabelaPacientes
