function boaNoticia(nota) {
    if (nota >= 7) {
        return 'Passou, sua nota foi ' + nota
    }
}

console.log(boaNoticia(7))

function seForVerdadeEuFalo(valor) {
    if (valor) {                                //Verificando se algo é verdadeiro, tem que ser diferente de (false, undefined, Null, NaN)
        return 'É verdade... ' + valor
    }
}

console.log(seForVerdadeEuFalo(0))