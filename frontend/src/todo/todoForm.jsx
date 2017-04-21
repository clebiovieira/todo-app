import React from 'react'
import {connect} from 'react-redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

//<div className='col-xs-12 col-sm-9 col-md-10'>
//<button className='btn btn-primary'>
//<i className='fa fa-plus'></i>
//</button>

const TodoForm = props => {
    const keyHandler = (e) => {
            if(e.key === 'Enter'){
                e.shiftKey ? props.handleSearch() : props.handleAdd()       
            }else if(e.key === 'Escape'){
                props.handleClear()
            }
    }
    
    return (
        <div role='form' className='todoForm'>
            
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' 
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler} >
                </input>
            </Grid>
            
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}/>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}/>                
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}/>                
            </Grid>
        </div>
    )
}

//Mapear o estado com o redux (state.todo está no Reducer.js)
const mapStateToProps =  state => ({description: state.todo.description})

export default connect(mapStateToProps)(TodoForm)


