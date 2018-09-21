import React from 'react'
function Child(props){
    let ss='xiao'
    let value ={
        name:'xiaoshulin',
        age:34
    }
    return (
       typeof props.children ==='function'?
       props.children(value):
        <div name={'xiao'}>
            {ss}
            {props.children}
        </div>
    )
}

export default Child