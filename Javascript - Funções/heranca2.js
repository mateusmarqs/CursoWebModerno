// Cadeia de protótipos (prototype chain)
// Notação literal de objeto

Object.prototype.z = 'Z'    //Não faço isso em casa
const avo = { a: 'A' }
const pai = { __proto__: avo, b: 'B' } //herança
const filho = { __proto__: pai, c: 'C'} //herança

console.log(filho.a)
console.log(pai.t) 
console.log(pai.z)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual =+ delta   
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return this.velAtual+'km/h de '+this.velMax+'km/h'
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324     //Sobrescrevendo
}

const volvo = {
    modelo: 'V40',
    status() {
        return this.modelo+': '+super.status()
    }
}

Object.setPrototypeOf(volvo, carro) //herança
console.log(volvo.status())
volvo.acelerarMais(20)
console.log(volvo.status())
Object.setPrototypeOf(ferrari, carro) //herança
console.log(ferrari.status())
console.log(ferrari.velMax)
ferrari.acelerarMais(220)
console.log(ferrari.status())