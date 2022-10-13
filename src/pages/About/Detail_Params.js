import React from "react"
import {useParams} from "react-router-dom"

function Detail(){
    const res = useParams()         //返回的是一个对象， 传递了声明就收集什么
    
    let {id, context} = res
    return (
        <div>
            <span>id: {id}    context: {context}</span>
        </div>
    )
}

export default Detail