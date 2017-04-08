import React from 'react'
import IconButton from '../template/iconButton'

//Atençao que nao usei parenteses. Usei chave para corpo da funcao
export default props => {
    const renderRows = () =>{
        //Se a lista esta nula entao garante um array vazio
        const list =  props.list || []
        
        //Map vai chamar a Arrow Function tantas vezes 
        //quanto for seu tamanho de lista de objetos
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
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
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}