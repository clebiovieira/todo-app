const Todo =  require('./todo')

//Expor API com métodos REST
Todo.methods(['get','post','put','delete'])
//Configurar: Validar e retornar o registro novo no update
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo