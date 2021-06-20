const soma = function(x, y) {
    return(x + y)
}

const imprimir = function(a, b, operaca = soma) {
    console.log(operaca(a, b))
}

imprimir(3, 4)
imprimir(3, 4, (x, y) => x * y)

const pessoa = {
    falar: () => console.log('Opaaa')
}

pessoa.falar()