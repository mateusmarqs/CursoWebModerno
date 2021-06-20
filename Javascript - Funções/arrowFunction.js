let dobro = function(a) {
    return 2 * 2
}

dobro = (a) => {
    return 2 * a
}

dobro = (a) => 2 * a                //Função arrow de uma linha possui um 'return' implicito

console.log(dobro(2))