// Promise é a evolução do callback
function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 3000)
    })
}

function busacarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mateusmarquesdc@gmail.com")
        }, 1500)
    })
}

function enviarEmail(corpo, destino) {   
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            var deuErro = false

            if (!deuErro) {
                resolve({time: 6, to: 'mateusmarquesdc@gmail.com'}) // Promessa OK!
            } else {
                reject('Fila cheia') // Foi mal, eu falhei :(
            }
        }, 3000)
    }) 
}

console.log('Inicio')
// O jeito de fazer os promisses não deve ser assim, mas funciona:
pegarId().then((id) => {
    busacarEmailNoBanco(id).then((email) => {
        enviarEmail('Olá, como via?', email).then(() => {
            console.log(`Email enviado, para o usuário com id: ${id}`)
        }).catch(err => {
            console.log(err)
        })
    })
})
console.log('Fim')

//console.log('Inicio de envio de e-mail')
//enviarEmail("Oi, seja bem vindo", "mateusmarquesdc@gmail.com").then(({time, to}) => {   // Operador de destructuring
//    console.log(`Você conseguiu fazer o que me prometeu. Seus valores são: ${time} e ${to}`)
//}).catch( erro => {
//    console.log(`Que pena, não deu :(, ocorreu o seguinde erro: ${erro}`)
//})