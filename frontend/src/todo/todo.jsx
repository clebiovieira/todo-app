import React,{Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        //Forçar o Bind e o this apontar quem foi o chamador, a propria classe
        this.handleAdd = this.handleAdd.bind(this)
    }
    
    handleAdd(){
        //This em funções normais é baseado em quem chamou a função
        //This aqui vai referenciar a classe por causa do Construtor fazendo Bind
        console.log(this)
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}