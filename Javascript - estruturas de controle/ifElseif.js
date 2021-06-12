Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimir = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {       //Equivalente ao 'elif' do Python
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimir(5)