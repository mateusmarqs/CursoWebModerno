const valores = [7, 7, 8, 9]
console.log(valores[0], valores[3]) //primeira e ultima posicao
console.log(valores[4]) //valor infefinido (fora de range)

valores[4] = 10
console.log(valores)

valores[10] = 10 
console.log(valores) //aloca intens vazios

console.log(valores.length) //retorna o número de elementos

valores.push({id: 3}, false) //adiciona valores ao array, como se fosse o .append do PYTHON
console.log(valores)
console.log(valores.pop()) //retorna E RETIRA ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof(valores)) //um vetor em JS é na verdade um objeto.
