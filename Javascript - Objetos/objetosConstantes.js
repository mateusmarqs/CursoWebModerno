// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)   // Conjelar o objeto, não pode mais fazer alterações no mesmo
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)