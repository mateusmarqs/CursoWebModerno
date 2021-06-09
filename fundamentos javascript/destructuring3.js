function rend({ max = 2, min = 4}) { //Se n vir nenhum valor do objeto, por padrao vai vir o que está atribuito na função
    return max + min
}

console.log(rend({ max: 50 }))