import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    //return (dispatch, getState) => {
    //    const description = getState().todo.description
    //    const search = description ? `&description__regex=/${description}/` : ''
        
        const request = axios.get(`${URL}?sort=-createdAt`)
        return {
            type: 'TODO_SEARCHED', 
            payload: request
        }
            //.then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    //}
}

export const add = (description) => {
    //Dispatch envia a action para todos os reducers
    //Garantindo que os reducers serao chamados na ordem correta
    //Quando uso react-thunk ao inves do action creator retornar um método(action)
    //posso retornar um método que tem como parametro o Dispatch 
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data}))
            //.then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })            
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })            
            .then(resp => dispatch(search()))
    }
}