// Object.preventExtensions - Não pode extender a quantidade de atributos de um objeto, apenas excluir

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promocao'
})

// Verificando se esse object é extensivo
console.log('Extensivel:',Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'opa'
delete produto.tag

console.log(produto)

// Selar um bojeto, não consegue nem adicionar nem excluir um elemento
const pessoa = {
    nome: 'Juliana',
    idade: 30
}
Object.seal(pessoa)
// Verificando se está selado
console.log('Selada:', Object.isSealed(pessoa))

pessoa.nome = 'Marta'
pessoa.sobrenome = 'Silva'
delete pessoa.nome
console.log(pessoa)

// E object.freeze conjela por completo o objeto, não podendo deletar elementos, adicionar ou modificar.