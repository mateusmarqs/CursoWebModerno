// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas à funcção

// Contexto léxico em ação, ex

const x = 2
function xx() {
    const x = 4
    return x
}

console.log(xx())