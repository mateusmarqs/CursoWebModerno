console.log(Math.ceil(6.1)) //*Curiodadde Arredonda pra cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //retorna publicamente esse metódo !!!!!!!!!!!!INTERESSANTE!!!!!!!!!!!!
    this.idade = 20
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
console.log(obj2.nome, obj2.idade)
obj2.exec()