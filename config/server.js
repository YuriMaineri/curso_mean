const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// urlencoded pega informações que vieram de um form
server.use(bodyParser.urlencoded({ extended: true}))
// Pega as informações se for em json e armazena num obj
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`Está rodando na porta ${port}`)
})

module.exports = server