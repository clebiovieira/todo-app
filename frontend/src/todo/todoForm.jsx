import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

//<div className='col-xs-12 col-sm-9 col-md-10'>
//<button className='btn btn-primary'>
//<i className='fa fa-plus'></i>
//</button>

export default props =>(
    <div role='form' className='todoForm'>
        
        <Grid cols='12 9 10'>
            <input id='description' className='formControl' 
                placeholder='Adicione uma tarefa'>
            </input>
        </Grid>
        
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}/>
        </Grid>
    </div>
)