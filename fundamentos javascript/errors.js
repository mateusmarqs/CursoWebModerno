function tratarError(err) { //Capturando o erro e mostrando
    throw {
        nome: err.name,
        msg: err.message,
        date: new Date
    }
}

function imprimir(obj) {
    try {
        console.log(obj.namme.toUpperCase() + '!!!') //um 'm' a mais
    } catch (err) {
        tratarError(err)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Mateus'}
imprimir(obj)