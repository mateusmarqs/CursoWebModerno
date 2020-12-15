const peso1 = 1.2
const peso2 = Number('2.0')

console.log(peso1, peso2)
//Verifica ser for inteiro, se for retorna True, se não, False
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

console.log(media.toFixed(2)) //imprime somente 2 casas decimais após a  virgula, valor ajustável
console.log(media.toString())  //retorna o valor como sendo uma string
console.log(media.toString(2)) //converte o valor para binário com o "2"