//Novo recurso ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua dois',
        numero:'543'
    }
}

const { nome, idade, } = pessoa //operador destructuring -> {}

console.log(nome)
console.log(idade)

const { nome: n, idade: i } = pessoa //atribuindo a uma variável

console.log(n)
console.log(i)

const { endereço: { logradouro, numero }} = pessoa //pegando apenas o logradouro e numero

console.log(logradouro)
console.log(numero)