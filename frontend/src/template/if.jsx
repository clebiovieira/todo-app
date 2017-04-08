import React from 'react'

export default props => {
    if(props.test) {
        //Retorna o objeto que está dentro da TAG IF
        return props.children
    } else {
        return false
    }
}