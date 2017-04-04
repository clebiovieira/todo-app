const express = require('express')

module.exports = function(server){
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    
    //usar todos os metodos Rest configurados no todoService(get,put...)
    todoService.register(router,'/todos')
}