const fabricantes = ['Mercedes', 'BMW', 'Audi']

function imprimir(nome, indice) {
    console.log(indice + 1,'. ',nome)
}

fabricantes.forEach(imprimir)                       //ForEach retorna indice e elementos de um array
fabricantes.forEach((a) => console.log(a))