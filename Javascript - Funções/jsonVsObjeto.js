// JSON serve para fazer a comunicação de linguagens completamente diferentes, por exemplo JavaScript e Python

const objeto = {
    x: 1,
    y: 2,
    soma() {
        return x + y
    }
}

console.log(JSON.stringify(objeto))
// console.log(JSON.parse("{a: 2, b: 3"))
console.log(JSON.parse('{"a": 2, "b": 3}'))
console.log(JSON.parse('{"str": "string", "b": true, "array": [1, 2, 3]}'))
