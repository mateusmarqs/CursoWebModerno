const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Fala' //contexto léxico 2 -> Se apagar essa função o return vai puxar a 'saudacao' de cima
    return saudacao
}

//Objetos são grupos aninhados de apres nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 2.90,
    endereco: {
        logradouro: 'Ruia Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())