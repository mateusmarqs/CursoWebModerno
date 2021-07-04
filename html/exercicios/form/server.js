const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    res.send(`Usuário ${name} incluido com sucesso!`)
})

app.post('/usuario/delete', (req, res) => {
    const { id } = req.body
    res.send(`O usuário de id: ${id} foi alterado com sucesso!`)
})

app.listen(3003)
console.log('Servidor rodando')