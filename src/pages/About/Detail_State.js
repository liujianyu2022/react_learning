
import React from "react"
import {useLocation} from "react-router-dom"

function Detail_State(){
    let {state:{id, context}} = useLocation()       //解构对象的连续写法

    console.log(useLocation())
    return (
        <div>
            <span>id: {id}    context: {context}</span>
        </div>
    )
}

export default Detail_State