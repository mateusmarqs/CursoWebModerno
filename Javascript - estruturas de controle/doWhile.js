function getInteiro(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {                                        //Entra direto, e só sai se a condição for verdadeira
    opcao = getInteiro(-1, 10)
    console.log(opcao)
} while (opcao != -1)