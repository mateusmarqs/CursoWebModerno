const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)          //this retorna globalmente uma 
    }
}

pessoa.falar()

const falarAgora = pessoa.falar
falarAgora() //da erro!

const falarAgoraComBind = pessoa.falar.bind(pessoa)
falarAgoraComBind() //Determinou como o contexto do this o objeto pessoa

//bind determina o objeto que queremos utilizar como contexto
//Pesquisar sobre o .bind()