export default class ArrayDeNotas {
    constructor() {
        this.notas = []
        this._inscritos = []
        this.categorias = []
    }

    adicionarNota(titulo, texto, categoria) {
        const newNota = new Nota(titulo, texto, categoria)
        this.notas.push(newNota)
        this.notificar()
    }

    apagarNotas(index) {
        this.notas.splice(index, 1)
        this.notificar()

    }

    inscrever(funcao) {
        this._inscritos.push(funcao)
    }

    unsubscribe(funcao) {
        this._inscritos = this._inscritos.fill(value => value !== funcao)
    }

    notificar() {
        this._inscritos.forEach((funcao) => {
            funcao(this.notas)
        })
    }


}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}
