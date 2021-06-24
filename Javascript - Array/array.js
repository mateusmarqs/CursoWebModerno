console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovaods = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[9])

aprovados[3] = "Paulo"
console.log(aprovados[3])

aprovados.push('Fabia')
console.log(aprovados.length)   //Retorna o tamanho
aprovados.sort()                //bagunça o array
console.log(aprovados)

delete aprovados[2]             //deleta
console.log(aprovados)
console.log(aprovados[2])

aprovados.splice(2,3)           //exclui elementos dados um range, onde: splice(inicio, fim)
console.log(aprovados)