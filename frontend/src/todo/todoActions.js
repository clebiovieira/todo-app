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
    //return dispatch => {
    const request = axios.post(URL, { description })
    return [
        {type: 'TODO_ADDED', payload: request},
        search()
    ]

            //.then(resp => dispatch(clear()))
            //.then(resp => dispatch(search()))
}