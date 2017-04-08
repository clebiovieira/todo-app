import React from 'react'

export default props =>(
    <div role='form' className='todoForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='description' className='formControl' 
                placeholder='Adicione uma tarefa'>
            </input>
        </div>
        <div className='col-xs-12 col-sm-3 col-md-1'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>            
        </div>
    </div>
)