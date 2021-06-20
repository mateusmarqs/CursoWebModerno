class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log('Nome é',this.nome)
    }
}

const pessoa = new Pessoa('Thiago')
pessoa.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log('Nome agora é',nome)
    }
}

const pessoa2 = criarPessoa('Rabanete')
pessoa2.falar()