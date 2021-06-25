const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 1200, fragil: true },
    { nome: 'Copo de Vidro', preco: 20, fragil: true },
    { nome: 'Copo de plástico', preco: 8, fragil: true }
]

console.log(produtos.filter((produto) => {
    return produto.preco > 2400 
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))