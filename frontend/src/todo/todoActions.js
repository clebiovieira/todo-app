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
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data}))
            //.then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }    
}    