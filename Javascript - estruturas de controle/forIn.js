const notas = [6.7, 8.9, 3.7, 7.8]

for(let i in notas) {                       //o in em array retorna o indice e não o valor
    console.log(i, notas[i])                //sempre colocar o let
}

const pessoa = {
    Nome: 'Ana',
    idade: 20
}
for (let atributo in pessoa) {                      //Já em objeto percorre os atributos
    console.log(atributo, pessoa[atributo])
}