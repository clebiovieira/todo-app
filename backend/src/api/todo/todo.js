//Node-restful é uma API REST em cima do mongoose para facilitar o uso dele
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description:{type: String, required: true},
    done:{type: Boolean, required: true, default: false},
    createdAt:{type: Date, default: Date.now}
})