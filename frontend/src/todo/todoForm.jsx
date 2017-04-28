import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import {changeDescription, search, add} from './todoActions'


//<div className='col-xs-12 col-sm-9 col-md-10'>
//<button className='btn btn-primary'>
//<i className='fa fa-plus'></i>
//</button>

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e){        
        //ECMA2015 - Extrair referencias de um objeto
        const {add, search, description} = this.props

        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)       
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    componentWillMount(){
        this.props.search()
    }

    render(){
        //ECMA2015 - Extrair referencias de um objeto
        const {add, search, description} = this.props

        return(
            <div role='form' className='todoForm'>
                
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' 
                        placeholder='Adicione uma tarefa'
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler} >
                    </input>
                </Grid>
                
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={()=>add(description)}/>
                    <IconButton style='info' icon='search'
                        onClick={()=>search()}/>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}/>                
                </Grid>
            </div>           
        )
    }
}

//Mapear o estado com o redux (state.todo está no Reducer.js)
const mapStateToProps =  state => ({description: state.todo.description})

//dispatch é quem dispara a ação e passa a ação para todos os Reducers
const mapDispatchToProps = dispatch => 
    bindActionCreators({add, changeDescription,search},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)


