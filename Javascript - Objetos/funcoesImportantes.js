const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
} 

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    weritable:  false,
    value: '01/01/2019' 
})

console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '02/06/2021'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))


const dest= { a: 1}
const o1 = { b: 1}
const o2 = { c: 1, a: 4}
const obj = Object.assign(dest, o1, o2 /*...*/)
console.log(obj)

Object.freeze(obj)
obj.c = 123
console.log(obj)