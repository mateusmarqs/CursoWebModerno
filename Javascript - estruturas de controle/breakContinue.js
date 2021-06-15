const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break                                    // break funcina no bloco mais próximo a ele, interrompendo as execuções do msm
        console.log('Dentro do break', x)        // no For, While ou Switch
    }
    console.log('Fora do break', x)
}


for (let x in nums) {
    if (x == 5) {
        continue                                   // continue funcina no bloco mais próximo a ele, interrompendo aexecução atual do msm
        console.log('Dentro do continue', x)          // no For, While ou Switch
    }
    console.log('Fora do continue', x)
}

externo:                                         // Rotulos
for (a in nums) {                                // !!!!!!!!!! Não usar essa estrutura !!!!!!!!!!! 
    for (b in nums) {
        if (a == 1 && b == 2) { 
            break externo             // Break retorna para o rótulo (for externo)
        } console.log('To dentro')
    }
}
console.log('fim')