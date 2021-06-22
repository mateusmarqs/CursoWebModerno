function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

// simulando o new

function novo(funcao, ...params) {  // ... serve para concatenar uma sequencia de parametros dentro de um vetor
    const obj = {}
    obj.__proto__ = funcao.prototype
    funcao.apply(obj, params)
    return obj
}

const funcNovo = novo(Aula, 'Bem vindo', 123)
console.log(funcNovo)