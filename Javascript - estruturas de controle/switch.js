const imprimir = function(nota) {
    switch (Math.floor(nota)) {                         // Math.floor arrendonda pra baixo
        case 10:                                        // Quando entra no primeiro executa todos abaixo
        case 9:                                         // break serve para executar um e sair da function
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        default:
            console.log('Nota inválida')
    }
}

imprimir(8)