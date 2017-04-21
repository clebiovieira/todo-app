import React from 'react'

import {connect} from 'react-redux'

import IconButton from '../template/iconButton'


const TodoList = props => {
    
    const renderRows = () =>{
        //Se a lista esta nula entao garante um array vazio
        const list =  props.list || []
        
        //Map vai chamar a Arrow Function tantas vezes 
        //quanto for seu tamanho de lista de objetos
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        hide={todo.done}
                        onClick={()=>props.handleMarkAsDone(todo)}/>
                    <IconButton style='warning' icon='undo'
                        hide={!todo.done}
                        onClick={()=>props.handleMarkAsPending(todo)}/>
                    <IconButton style='danger' icon='trash-o'
                        hide={!todo.done}
                        onClick={()=>props.handleRemove(todo)}/>                                                    
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

//Mapear o estado com o redux (state.todo está no Reducer.js)
const mapStateToProps =  state => ({list: state.todo.list})

export default connect(mapStateToProps)(TodoList)

