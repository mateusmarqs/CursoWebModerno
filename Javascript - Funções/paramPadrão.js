function soma(a, b, c) {
    a = a || 1                          //Caso o parametro não esteja definido o '||' faz com que seja automaticamente 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(6))
console.log(soma(0, 0, 0))              //Porém não se pode usar 0, pois com zero é retornado false

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(5))

//valor padrao es2015

function soma3(a = 1, b = 1, c = 1) {       //Parametros padrao ficaram desse jeito
    return a + b + c
}

console.log('es2015: ',soma3(2, undefined, 20))