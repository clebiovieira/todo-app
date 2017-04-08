import React,{Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

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
    }

    handleAdd(){
        //This em funções normais é baseado em quem chamou a função
        //This aqui vai referenciar a classe por causa do Construtor fazendo Bind
        console.log(this.state.description)
    }

    handleChange(e){
        //target é o input onde foi digitado algo
        // (...this.state) é um espread que vai pegar todos os valores do objeto State 
        this.setState({...this.state, description: e.target.value})
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}/>
                <TodoList/>
            </div>
        )
    }
}