const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Mateus',
        idade: 21
    },
    calcularValorDoSeguro() {
        //...
    }
}

console.log(carro)

carro.proprietario.nome = 'Ronaldo'
carro.proprietario.idade = 48
console.log(carro)

delete carro.calcularValorDoSeguro
console.log(carro)