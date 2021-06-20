function Pessoa() {
    this.idade = 0

    setInterval(function() {        //funcção que define um intervalo
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)                        //Determinando o tempo do intervalo em milisegundos
}

new Pessoa