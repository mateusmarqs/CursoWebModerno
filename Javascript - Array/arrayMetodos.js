const pilotos = ['Vettel', 'Alonso', 'Raikkonen']

pilotos.pop() // Tira o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona o ultimo elemento 
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no primeiro
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // (adicionar a partir do indice , remover algum? , a serem adicionados)
console.log(pilotos)

// removendo com splace
pilotos.splice(3, 1) //removendo massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(1, 4) // novo array, onde: (inicio , fim)
console.log(algunsPilotos1)
