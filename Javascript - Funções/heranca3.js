const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)   

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false, // Se falso ele não aceita ser alterado, se true ele aceita
        enumerable: true // Permite ser listado
    }
})

// Altere as true e false das linhas 10 e 11 e veja o que acontece
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(filha2.nome)

// Verificando se a propriedade de um objeto veio por herança ou não
for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log('Sem herança: '+key) : console.log('Por herança: '+key)
}