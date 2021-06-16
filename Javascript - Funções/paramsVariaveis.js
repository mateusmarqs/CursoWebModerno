function soma() {
    let soma = 0
    for (i in arguments) {              //Arguments é um vetor que contem todos os parametros passados para função
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, 3, 4, 6, 10))