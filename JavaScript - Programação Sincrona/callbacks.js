function enviarEmail(corpo, destino, callback) {   
    setTimeout(() => {
        
        // ....... Lógica do envio de e-mail

        var deuErro = true

        if (deuErro) {
            callback(12, 'O envio do e-mail falhou')
        } else {
            callback(12)
        }
        //callback('Enviado', 5, '8s')  // callback serve para deixar parte do código síncrono
    }, 4000)
}

console.log('Inicio de envio de e-mail')
enviarEmail("Oi, seja bem vindo", "mateusmarquesdc@gmail.com", (time, erro) => {  // callback
    if (erro == undefined) {
        console.log(`E-mail enviado, levou ${time}s.`)
    } else {
        console.log(`Deu erro: ${erro}.`)
    }
})
