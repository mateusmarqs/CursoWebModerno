class Animal {
    constructor(nome, idade, preco) {
        this.nome = nome
        this.idade = idade
        this.preco = preco
    }

    checarEstoque() {
        return 10
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, preco) {
        super(nome, idade, preco)
        this.latido = 'Au au'
    }

    latir() {
        return this.latido
    }

}

var dog = new Cachorro('Doguim', 1, 240)
console.log(dog.checarEstoque())
console.log(dog.latir())
