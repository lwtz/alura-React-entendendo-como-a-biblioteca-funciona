class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(funcao) {
        this._inscritos.push(funcao)
    }

    unsubscribe(funcao){
        this._inscritos = this._inscritos.fill( value =>  value !== funcao)
    }

    notificar() {
        this._inscritos.forEach((funcao) => {
            funcao(this.categorias)
        })
    }

    adicionarCategoria(newCategoria) {
        this.categorias.push(newCategoria)
        this.notificar()
    }

}

export default Categorias
