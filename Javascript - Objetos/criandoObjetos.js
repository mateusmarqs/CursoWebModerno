// Formas de criar objetos
// Usando a notação literal
const obj = {}
console.log(obj)

// Object em JS
const obj2 = new Object
console.log(obj2)

// Funções contrutora
function Produto(nome, preco) {
    this.nome = nome
    this.getPreco = () => preco
}

const produtoNovo = new Produto('Tablet', 1200)
console.log(produtoNovo.getPreco())
console.log(produtoNovo.nome)

// Função factory
function criarFuncionario(nome, salario) {
    return {
        nome,
        getSalario(){
            return salario
        }
    }
}

const funcionario = criarFuncionario('Roberto', 1800)
console.log(funcionario.nome)
console.log(funcionario.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um Objeto..
const fromJSON = JSON.parse('{"info": "Sou um JOSN"}')
console.log(fromJSON)