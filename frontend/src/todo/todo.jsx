import React,{Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)

        //Cria o objeto que vai representar o estado a ser controlado
        //pela mudança no componente (neste caso todoForm)        
        this.state = {description: '', list:[]}
        
        //Forçar o Bind e o this apontar quem foi o chamador, a propria classe        
        this.handleAdd = this.handleAdd.bind(this)
        
        //Forçar o Bind e o this apontar quem foi o chamador, a propria classe        
        this.handleChange = this.handleChange.bind(this)

        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description})
            .then(resp => this.refresh())
        
        //This em funções normais é baseado em quem chamou a função
        //This aqui vai referenciar a classe por causa do Construtor fazendo Bind
        //console.log(this.state.description)
    }

    handleChange(e){
        //target é o input onde foi digitado algo
        // (...this.state) é um espread que vai pegar todos os valores do objeto State 
        this.setState({...this.state, description: e.target.value})
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, 
                                        description: '',
                                        list: resp.data}))
    }
    
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}/>
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}