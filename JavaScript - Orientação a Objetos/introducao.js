// É melhor ter apenas uma classe por arquivio
// Arquivos que contem uma classe começam com a letra maiuscula, e tem o nome da classe (não é uma regra, mas uma conversão usada a anos por programadores)
// Classe é uma receita para criar um objeto, por exemplo:
// A classe carro é uma receita para o objeto UNO, Gol, Fiesta...

class Carro {

    constructor(marca, ano, modelo, adicionais) {         // função responsável por gerar os objetos na memória (instância)
        this.marca = marca
        this.ano = ano
        this.modelo = modelo
        this.adicionais = adicionais

    }

    acelerar() {
        return 'Vrummmm'
    }

    Informacoes() {
        console.log(`
            Marca: ${this.marca},
            Modelo: ${this.modelo},
            Ano: ${this.ano},
            Marca: ${this.marca},
            ${this.acelerar()}
        `)
    }
}

var fiesta = new Carro('Ford', 2014, 'Fiesta', ['Airbag', 'ABS'])
fiesta.Informacoes()

//console.log(fiesta.ano)
//fiesta.marca = 'Ford'
//console.log(fiesta.marca)


