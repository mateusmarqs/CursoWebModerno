Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Marcos', 'Roberto', 'Silva', 'Daninha']

aprovados.forEach2((nome, indice) => {
    console.log('O aprovado está no indice', indice+1, ', e seu nome é',nome)
})