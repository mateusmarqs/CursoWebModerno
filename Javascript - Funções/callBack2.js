const notas = [2, 5, 7, 8, 5, 9, 10]

//Sem callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])      //push adiciona um elemento em um array
    }
}

console.log(notasBaixas)

//Com callback
const notasBaixas2 = notas.filter((nota) => nota < 7)
console.log(notasBaixas2)

//Ver sobre padrão observer javascript