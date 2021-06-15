let contador = 1

while (contador <= 10) {
    console.log('Contador = ', contador)
    contador++  
}

for (let i = 1; i <= 10; i++) { //inicio; condição; incremento
    console.log('cont = ', i)
}

const notas = [6.7, 6.5, 9.0]

for (let i = 0; i < notas.length; i++) {     // .lenght é o tamanho de um array
    console.log(notas[i])                    // O uso do 'let' é uma boa prática de programação, deixa a variável
}                                            // apenas no escopo do for, sem acesso externo