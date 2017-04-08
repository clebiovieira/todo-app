//"modules" foi o apelido dado no webpack.config.js para representar a pasta node_module
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
//import '../template/custom.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'
//import Routes from './routes'

//Esta entre parentes pq significa uma expresao que sera retornada
//pela Arrow Function
export default props => (
    <div className='container'>
        <Menu/>
        <Todo/>
        <About/>
    </div>
)