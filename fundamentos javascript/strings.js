const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna o 4º valor da string
console.log(escola.charAt(5)) //Se fora de range retorna nada
console.log(escola.charCodeAt(3)) //unicode
console.log(escola.indexOf('3')) //retorna o indice da stirng
console.log(escola.substring(1)) //armazena a partir do 2º elemento
console.log(escola.substring(0, 3)) //percodde do elemento 0 ao 4º elemento

console.log('Escola'.concat(escola).concat('!')) //concatena string, junta elas
console.log(escola.replace(/\d/, 'e')) //substitui todos os digitos do codigo por 'e'. (REJAX)

console.log('Ana,Maria,Pedro'.split(',')) //Gera um vetor separado pela virgula.
