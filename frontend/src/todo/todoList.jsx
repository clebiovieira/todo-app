import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'

import {markAsDone, markAsPending, remove} from './todoActions'

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
                        onClick={()=>props.markAsDone(todo)}/>
                    <IconButton style='warning' icon='undo'
                        hide={!todo.done}
                        onClick={()=>props.markAsPending(todo)}/>
                    <IconButton style='danger' icon='trash-o'
                        hide={!todo.done}
                        onClick={()=>props.remove(todo)}/>                                                    
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

//dispatch é quem dispara a ação e passa a ação para todos os Reducers
const mapDispatchToProps = dispatch => 
    bindActionCreators({markAsDone, markAsPending, remove},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

