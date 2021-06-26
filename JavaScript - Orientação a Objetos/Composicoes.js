// Consiste em criar pequenos componentes (classes) para ser reaproveitado em outros componentes
// Evitando assim bugs, e facilitando a reutilização de código

class CriadorArquivo {
    criarArquivo(){
        console.log('Arquivo criado')
    }
}

class DeletarArquivo {
    deletarArquivo(){
        console.log('Arquivo deletado')
    }
}

class ManipuladorDeArquivo {
    constructor(arqivo) {
        this.arqivo = arqivo
        this.criar = new CriadorArquivo()
        this.deletar = new DeletarArquivo()
    }
}

let manipulador = new ManipuladorDeArquivo('arquivo.txt')
manipulador.criar.criarArquivo()
manipulador.deletar.deletarArquivo()