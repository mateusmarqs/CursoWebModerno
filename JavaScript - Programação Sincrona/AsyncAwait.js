
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

function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: 'victor', lang:'JS'},
                {name: 'Lima', lang:'C#'},
                {name: 'Daniel', lang:'Java'}
            ])
        }, 3000)
    })
}

async function principal() {
    var usuarios = await pegarUsuarios()    // await bloqueia o fluxo de código e só funciona com o assync
    console.log(usuarios)
    console.log('Olá')
}
principal()

pegarUsuarios().then((usuarios) => {
    console.log(usuarios)
})
