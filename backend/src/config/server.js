const port       = 3003
const bodyParser = require('body-parser')
const express    = require('express')
const server     = express()

//Habilitando Cors para segurança
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
//Habilitando o uso e CORS para seguranca
server.use(allowCors)

server.listen(port,function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server