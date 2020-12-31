let valor //não inicializada
console.log(valor)
//console.log(valor2)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) da um erro!

const produto = {}
console.log(produto.preco)

produto.preco = 24.90
console.log(produto)

produto.preco = undefined //evite isso
console.log(produto.preco)
console.log(produto)