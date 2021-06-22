const sequencia = {
    _valor: 1,  //Convenção, usada para desenvolvedores saberem que essa variável só deve ser acessada internamente ou através de um get/set
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
